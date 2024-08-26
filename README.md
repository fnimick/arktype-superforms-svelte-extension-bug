# Minimum reproducible example for arktype + superforms + svelte vscode extension bug

## SECOND BRANCH: svelte check failure

From the primary branch, we add a `src/lib/arktype-test.ts` file that now triggers another issue
with the svelte extension and svelte-check.

Now, with this file present, not only does the extension not report an error in `arktype-test.ts`
where `svelte-check` does, but also now `svelte-check` fails on all the other files inside `routes/`
that were previously working.

Adding an `import {} from 'arktype'` anywhere in `src/lib` is sufficient to trigger `svelte-check`
to also resolve the incorrect import and fail on all the previously working test cases in `routes/`.
