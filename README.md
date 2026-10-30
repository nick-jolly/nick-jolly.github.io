# Portfolio site (Jekyll)

## Run it locally
1. Install Ruby (3.x) and Bundler: https://jekyllrb.com/docs/installation/
2. In this folder run:
   ```
   bundle install
   bundle exec jekyll serve --livereload
   ```
3. Open http://localhost:4000

## Make it yours
- `_config.yml`: your name, tagline, email, social handles.
- `index.html`, `about.md`: intro text.
- `_projects/*.md`: one file per project. Copy an existing one; edit the front matter (title, summary, year, tools, result, repo) and write the body in Markdown. Delete the samples.
- `_data/photos.yml` + `assets/photos/`: drop JPGs in the folder and list each one in the YAML. Resize to about 1800px on the long edge and compress (aim for under 400 KB each) so the gallery stays fast.
- `assets/css/main.css`: colours and fonts are CSS variables at the top of the file.

## Deploy on GitHub Pages
1. Create a repo (`username.github.io` for a main site, or any name for a project site).
2. Push this folder to it.
3. Settings > Pages > Build and deployment > Source: "GitHub Actions", then choose the Jekyll template.
4. For a project site, set `baseurl: "/repo-name"` in `_config.yml`.
