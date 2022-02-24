<?php

namespace ClarkWinkelmann\EditableUserAttributes;

use Carbon\Carbon;
use Flarum\Extend;
use Flarum\Foundation\AbstractValidator;
use Flarum\User\Event\Saving;
use Flarum\User\UserValidator;
use Illuminate\Support\Arr;
use Illuminate\Validation\Factory;
use Illuminate\Validation\Validator;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),

    new Extend\Locales(__DIR__ . '/resources/locale'),

    (new Extend\Event())
        ->listen(Saving::class, function (Saving $event) {
            $attributes = (array)Arr::get($event->data, 'attributes');

            if (Arr::exists($attributes, 'joinTime')) {
                $event->actor->assertCan('editJoinTime', $event->user);

                /**
                 * @var $factory Factory
                 */
                $factory = resolve(Factory::class);

                // We can't use the UserValidator for this since we need to validate the format before parsing
                $factory->make(Arr::only($attributes, 'joinTime'), [
                    'joinTime' => [
                        'required',
                        'date',
                    ],
                ])->validate();

                $event->user->joined_at = Carbon::parse(Arr::get($attributes, 'joinTime'));
            }

            if (Arr::exists($attributes, 'avatarUrl')) {
                $event->actor->assertCan('editAvatarUrl', $event->user);

                $event->user->changeAvatarPath(Arr::get($attributes, 'avatarUrl'));
            }
        }),

    (new Extend\Validator(UserValidator::class))
        ->configure(function (AbstractValidator $flarumValidator, Validator $validator) {
            $attributes = $validator->getData();
            $rules = $validator->getRules();

            if (Arr::exists($attributes, 'avatar_url')) {
                $rules['avatar_url'] = [
                    'nullable',
                    'url',
                ];
            }

            $validator->setRules($rules);
        }),
];
