protected $middlewareGroups = [
    'web' => [
        // ...
        \App\Http\Middleware\HandleInertiaRequests::class,
    ],
];
