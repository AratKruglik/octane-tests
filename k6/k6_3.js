import http from 'k6/http';
import { check, sleep } from 'k6';
import { group } from 'k6';

export let options = {
    stages: [
        { duration: '2m', target: 100 }, // Протягом 2 хвилин підняти навантаження до 100 користувачів
        { duration: '5m', target: 100 }, // Підтримувати 100 користувачів протягом 5 хвилин
        { duration: '2m', target: 200 }, // Протягом 2 хвилин підняти навантаження до 200 користувачів
        { duration: '5m', target: 200 }, // Підтримувати 200 користувачів протягом 5 хвилин
        { duration: '2m', target: 300 }, // Протягом 2 хвилин підняти навантаження до 300 користувачів
        { duration: '5m', target: 300 }, // Підтримувати 300 користувачів протягом 5 хвилин
        { duration: '1m', target: 0 },  // Зменшити навантаження до 0 користувачів протягом 1 хвилин
    ],
};

export default function () {
    group('Load Home Page', function () {
        let res = http.get('http://localhost/up');
        check(res, {
            'status is 200': (r) => r.status === 200,
        });
        sleep(1);
    });

    group('View Users List', function () {
        let productListRes = http.get('http://localhost/load');
        check(productListRes, {
            'status is 200': (r) => r.status === 200,
        });
        sleep(1);
    });
}
