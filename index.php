<?php
// This file serves as a proxy to load the built React app from the dist folder.
// This prevents the server from accidentally loading the source index.html
// which causes MIME type errors.
require __DIR__ . '/dist/index.html';
