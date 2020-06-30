FROM ruby:2.3.5

RUN printf "deb http://archive.debian.org/debian/ jessie main\ndeb-src http://archive.debian.org/debian/ jessie main\ndeb http://security.debian.org jessie/updates main\ndeb-src http://security.debian.org jessie/updates main" > /etc/apt/sources.list 

RUN apt-get -qq update && \
    apt-get -q -y upgrade && \
    apt-get install -y sudo curl wget locales && \
    rm -rf /var/lib/apt/lists/*

RUN locale-gen C.UTF-8

RUN chmod 0755 /etc/default/locale
ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8
ENV LANGUAGE=C.UTF-8

ENV APP_ROOT /app_root

# By adding Gemfiles and invoke bundle install before copy all files we are using container cache for gems.
ADD Gemfile ${APP_ROOT}/
ADD Gemfile.lock ${APP_ROOT}/

WORKDIR ${APP_ROOT}
RUN bundle check || bundle install

# Installing NodeJS
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_11.x  | bash -
RUN apt-get -y install nodejs

RUN locale -a

COPY . ${APP_ROOT}

EXPOSE 4000
CMD bundle exec jekyll $JEKYLL_COMMAND --config $CONFIG_FILE $JEKYLL_EXTRA
