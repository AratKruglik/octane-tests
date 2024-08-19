# Performance test for long running PHP apps

## Preparations:
### Be sure you have Docker installed on your machine!
### Be sure you have installed K6.io tool! (https://k6.io)
### Copy `env.example` file to `.env` inside your project folder.

### PHP-FPM tests
To run tests for PHP-FPM do next steps:
1. Run ``git checkout php-fpm``
2. Run `docker compose up` to up your containers.
3. Run ``composer install`` from your machine or from the `laravel.test`container.
4. Run `php artisan migrate --seed` to migrate and seed your DB.
5. Run `k6 run ./k6/k6.js` to run test 1.
6. Run `k6 run ./k6/k6_2.js` to run test 2.
7. Run `k6 run ./k6/k6_3.js` to run test 3.

### Swoole tests
To run tests for Swoole do next steps:
1. Run ``git checkout swoole``
2. Run `docker compose up` to up your containers.
2. Run ``composer install`` from your machine or from the `laravel.test`container.
3. Run `php artisan octane:install` to install Swoole for Laravel Octane.
4. Run `php artisan migrate --seed` to migrate and seed your DB.
5. Run `k6 run ./k6/k6.js` to run test 1.
6. Run `k6 run ./k6/k6_2.js` to run test 2.
7. Run `k6 run ./k6/k6_3.js` to run test 3.

### RoadRunner tests
To run tests for RoadRunner do next steps:
1. Run ``git checkout roadrunner``
2. Run `docker compose up` to up your containers.
2. Run ``composer install`` from your machine or from the `laravel.test`container.
3. Run `php artisan octane:install` to install RoadRunner for Laravel Octane.
4. Run `php artisan migrate --seed` to migrate and seed your DB.
5. Run `k6 run ./k6/k6.js` to run test 1.
6. Run `k6 run ./k6/k6_2.js` to run test 2.
7. Run `k6 run ./k6/k6_3.js` to run test 3.

### FrankenPHP tests
To run tests for FrankenPHP do next steps:
1. Run ``git checkout frankenphp``
2. Run `docker compose up` to up your containers.
2. Run ``composer install`` from your machine or from the `laravel.test`container.
3. Run `php artisan octane:install` to install FrankenPHP for Laravel Octane.
4. Run `php artisan migrate --seed` to migrate and seed your DB.
5. Run `k6 run ./k6/k6.js` to run test 1.
6. Run `k6 run ./k6/k6_2.js` to run test 2.
7. Run `k6 run ./k6/k6_3.js` to run test 3.
