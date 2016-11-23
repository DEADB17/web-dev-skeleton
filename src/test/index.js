/* yarn test -- <options>
 * Options
 * --init             Add AVA to your project
 * --fail-fast        Stop after first test failure
 * --serial, -s       Run tests serially
 * --tap, -t          Generate TAP output
 * --verbose, -v      Enable verbose output
 * --no-cache         Disable the transpiler cache
 * --no-power-assert  Disable Power Assert
 * --match, -m        Only run tests with matching title (Can be repeated)
 * --watch, -w        Re-run tests when tests and source files change
 * --source, -S       Pattern to match source files so tests can be re-run (Can be repeated)
 * --timeout, -T      Set global timeout
 */

import test from 'ava';

test('default', t => {
    t.fail('add tests');
});
