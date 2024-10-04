<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    private $filePath;

    public function __construct()
    {
        $this->filePath = storage_path('app/users.json');
        if (!file_exists($this->filePath)) {
            file_put_contents($this->filePath, json_encode([]));
        }
    }

    public function index()
    {
        $users = json_decode(file_get_contents($this->filePath), true);
        return response()->json($users);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users.json,email',
        ]);

        $users = json_decode(file_get_contents($this->filePath), true);
        $id = count($users) + 1;
        $user = [
            'id' => $id,
            'name' => $request->name,
            'email' => $request->email,
            'created_at' => now()->toISOString(),
            'updated_at' => now()->toISOString(),
        ];
        $users[] = $user;
        file_put_contents($this->filePath, json_encode($users));

        return response()->json($user, 201);
    }

    public function show($id)
    {
        $users = json_decode(file_get_contents($this->filePath), true);
        $user = collect($users)->firstWhere('id', $id);
        
        return $user ? response()->json($user) : response()->json(null, 404);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users.json,email,' . $id,
        ]);

        $users = json_decode(file_get_contents($this->filePath), true);
        $index = collect($users)->search(fn($user) => $user['id'] == $id);

        if ($index === false) {
            return response()->json(null, 404);
        }

        $users[$index] = array_merge($users[$index], [
            'name' => $request->name,
            'email' => $request->email,
            'updated_at' => now()->toISOString(),
        ]);
        
        file_put_contents($this->filePath, json_encode($users));

        return response()->json($users[$index]);
    }

    public function destroy($id)
    {
        $users = json_decode(file_get_contents($this->filePath), true);
        $index = collect($users)->search(fn($user) => $user['id'] == $id);

        if ($index === false) {
            return response()->json(null, 404);
        }

        unset($users[$index]);
        file_put_contents($this->filePath, json_encode(array_values($users)));

        return response()->json(null, 204);
    }
}
