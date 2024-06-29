insert into profiles
    (id, username)
values
    ('22be394e-4b9c-400b-be7b-4cb43b0b75c1', 'Theo'),
    ('22be394e-4b9c-400b-be7b-4cb43b0b75c2', 'Elsa');

insert into posts
    (id, title, short_description, description, user_id)
values
    ('d075c37f-29f2-4a5c-9bd3-bff5666e1f3c', 'My first post test', 'This is my first post test. It is an incredible idea that will revolutionnize the world. You could even change your life.', '<h2 style="text-align: center;">My first post test</h2>', '22be394e-4b9c-400b-be7b-4cb43b0b75c1');

insert into post_comments
    (post_id, user_id, comment)
values
    ('d075c37f-29f2-4a5c-9bd3-bff5666e1f3c', '22be394e-4b9c-400b-be7b-4cb43b0b75c1', 'This is my first post test. It is an incredible idea that will revolutionnize the world. You could even change your life.');
