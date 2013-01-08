#Introduction
Originally, I wanted to develop a template that enabled quick and easy deployment via GitHub Pages.  However, GitHub Pages does not support custom plugins and this meant losing some of the customization I was really hoping for.  Unfortunately, what this means for you is you will have to install Jekyll (which means installing Ruby), clone this repository, and then build it locally.  Fortunately, this gives you the freedom to host the site that is generated on a service of your choosing.  I will have a recommended development setup for publishing to GitHub pages below, but first we'll just go over how to generate your static site.

#Dependencies
 - First you need Ruby (and it's easiest to install Jekyll via RubyGems)
 - Second, install [Jekyll](https://github.com/mojombo/jekyll/wiki/install).

Once you have both of these, fork this repository (or clone it however you'd like) so you can make changes locally.

#Customization
There are two basic steps: change the _config.yml file and change the content files.

##Config file
_config.yml contains most of the overall information you'll need.  It's pretty well-commented, so browse through it to find what you need to.

##Content Files
If you use the "Affiliations" and/or "Skills" sections, you will need to make a file in the _includes directory for each affiliation or skill and pass the filename to the appropriate variable in the _config.yml file.

#Building and deploying
To build, simply run `jekyll` in the root of this project's directory.  You can also run `jekyll --server` to run a local server to look at your changes.  Since "auto" is set to true in the config file, it will automatically update **any changes that are made to a file other than _config.yml**.  If you change _config.yml, you have to run jekyll again.

Running `jekyll` will output a static site to the _site directory.

##Deploying to any web server
To deploy to a generic web server, simply copy the files from the _site directory and upload them to your server.  If you're running one locally, I suggest setting up a symbolic link from your `www` directory.

##Deploying to GitHub Pages
I originally intended this to be used with [GitHub Pages](http://pages.github.com) (which uses Jekyll), but GitHub Pages does not support custom plugins, so you'll have to deploy the generated site to your GitHub Page repository rather than letting GitHub Pages process the Jekyll for you.  The simplest way is to set up a repository called `username.github.com` (where username is your username) and push your _site directory to this repository.  GitHub will automatically host this page.

###The two-repo approach
You may have noticed that this project is contained in `jandjorgensen.github.com.raw`.  After building my _site directory with Jekyll, I copy it to a directory with a git repository initialized and push it to `jandjorgensen.github.com`.

#Advanced customization
To make advanced changes, you can add sections in the _config.yml file, disable existing ones, and/or simply change the pages for each section under _include.

##Changing to support GitHub automatic building
As I mentioned above, this relies on some Jekyll plugins that GitHub Pages does not support.  If you want, you can change the configuration and pages so it no longer relies on those plugins (feel free to contact me if you have any questions about this, but I don't think it's wise for me to just include it in a basic README).

#License
[Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0.html)

#Reuse
By all means, please fork and reuse my page.  I'd prefer that you leave a subtle link in the footer back to the original, or to the GitHub Repo of the original (but you can't exactly plagarize what I'll happily share without restriction).  If you use this for commercial purposes, I'd just request fair pricing (e.g. if you charge someone to set up a personal website and use this, don't overcharge them).