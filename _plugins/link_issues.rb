module Jekyll
  module GithubIssuesLink
    def link_github_issues(input, repo)
        input.gsub(/(?<!&)(#(\d+))/, "<a href='https://github.com/#{repo}/issues/\\2'>\\1</a>")
    end
  end
end

Liquid::Template.register_filter(Jekyll::GithubIssuesLink)
