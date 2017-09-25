// This file is an entry point for angular non test files.

const context = require.context('./app', true, /(?!\.spec)\.js$/);

context.keys().forEach(context);
