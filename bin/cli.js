#!/usr/bin/env node
const pack = require('../dist');
console.log('🖤 Healthcare Industry Pack');
console.log('Usage: blackroad-os-pack-healthcare <command>');
console.log('Commands: install, configure, status, help');
pack.run(process.argv.slice(2));
