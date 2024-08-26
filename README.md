# Minimum reproducible example for arktype + superforms + svelte vscode extension bug

The bugs occurs under the following conditions:

- there is an import from `sveltekit-superforms/adapters` anywhere in the project. Here, it is in
  `src/lib/import.ts` and not used anywhere, or imported anywhere.
- There is a kit route file (e.g. `+page.ts`, `+server.ts` etc) containing an arktype type with a
  submodule reference. Here, it is in `routes/test/+server.ts`.
- Any other files using the same arktype type are OK, such as `routes/test/ok.ts` in this example.
- The svelte extension is installed in vscode and the typescript plugin is enabled.

Under these conditions, the svelte extension will not be able to resolve the e.g. `"string.email"`
arktype submodule reference, and will show an error in the editor, in kit route files only.

Of note, `svelte-check` does not report the error - this occurs using the typescript plugin in the
extension only.

## svelte-check failure

please see branch `svelte-check-fail` for a second test case in which we can trigger `svelte-check`
to also resolve the incorrect import, now with the extension reporting no errors and `svelte-check`
reporting errors that should not be present.