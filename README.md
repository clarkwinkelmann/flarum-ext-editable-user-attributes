# More editable user attributes

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/clarkwinkelmann/flarum-ext-editable-user-attributes/blob/master/LICENSE.md) [![Latest Stable Version](https://img.shields.io/packagist/v/clarkwinkelmann/flarum-ext-editable-user-attributes.svg)](https://packagist.org/packages/clarkwinkelmann/flarum-ext-editable-user-attributes) [![Total Downloads](https://img.shields.io/packagist/dt/clarkwinkelmann/flarum-ext-editable-user-attributes.svg)](https://packagist.org/packages/clarkwinkelmann/flarum-ext-editable-user-attributes) [![Donate](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.me/clarkwinkelmann)

This extension makes existing user attributes become editable via the REST API.

Ability to edit each value is controlled by its own permission.

Includes:

### Join Date

JSON:API attribute: `attributes.joinTime`

Validation: Laravel `required|date`

The value is then parsed with `Carbon::parse()`.
This means most date formats should be valid.
Using ISO 8601 or W3C format is recommended.

Changing join date could have unexpected side effects.
Other extensions can't react to the change because there are no events for it.
It's recommended to only set this new attribute during registration and not change it afterwards.

### External Avatar URL

JSON:API attribute: `attributes.avatarUrl`

Validation: Laravel `nullable|url`

**Warning:** there is intentionally no max length on the validation.
But Flarum will truncate the value to its column size (VARCHAR 100 by default).
You can edit the database column to accept longer values if you need.
If you pass user-provided values here, you will need to do your own length validation.

## Installation

    composer require clarkwinkelmann/flarum-ext-editable-user-attributes

## Support

This extension is under **minimal maintenance**.

It was developed for a client and released as open-source for the benefit of the community.
I might publish simple bugfixes or compatibility updates for free.

You can [contact me](https://clarkwinkelmann.com/flarum) to sponsor additional features or updates.

Support is offered on a "best effort" basis through the Flarum community thread.

**Sponsors**: Dater.com

## Links

- [GitHub](https://github.com/clarkwinkelmann/flarum-ext-editable-user-attributes)
- [Packagist](https://packagist.org/packages/clarkwinkelmann/flarum-ext-editable-user-attributes)
- [Discuss](https://discuss.flarum.org/d/30635)
