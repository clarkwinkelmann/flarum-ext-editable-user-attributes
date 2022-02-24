import app from 'flarum/admin/app';

app.initializers.add('clarkwinkelmann-editable-user-attributes', () => {
    app.extensionData
        .for('clarkwinkelmann-editable-user-attributes')
        .registerPermission({
            permission: 'user.editJoinTime',
            icon: 'fas fa-user-edit',
            label: app.translator.trans('clarkwinkelmann-editable-user-attributes.admin.permissions.editJoinTime'),
        }, 'moderate')
        .registerPermission({
            permission: 'user.editAvatarUrl',
            icon: 'fas fa-user-edit',
            label: app.translator.trans('clarkwinkelmann-editable-user-attributes.admin.permissions.editAvatarUrl'),
        }, 'moderate');
});
