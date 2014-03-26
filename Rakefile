desc "Build site using Jekyll"
task :build do
	sh "jekyll serve -w"
end

desc "Commit _site/"
task :commit do
  puts "\n## Staging modified files"
  status = system("git add -A")
  puts status ? "Success" : "Failed"
  puts "\n## Committing a site build at #{Time.now.utc}"
  message = "Build site at #{Time.now.utc}"
  status = system("git commit -m \"#{message}\"")
  puts status ? "Success" : "Failed"
  puts "\n## Pushing commits to remote"
  status = system("git push origin master")
  puts status ? "Success" : "Failed"
end

desc "Deploy Local to Server Ramnode"
task :deploy do 
	sh "rsync -avz \"_site/\" root@199.241.31.60:/var/zpanel/hostdata/zadmin"
end

desc "Commit and deploy _site/"
task :commit_deploy => [:commit, :deploy] do 
end