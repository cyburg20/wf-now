FROM functions/alpine:latest

RUN apk --update add nodejs nodejs-npm ca-certificates

RUN apk --no-cache add curl \
    && echo "Pulling watchdog binary from Github." \
    && curl -sSL https://github.com/openfaas-incubator/of-watchdog/releases/download/0.4.1/of-watchdog > /usr/bin/fwatchdog \
    && chmod +x /usr/bin/fwatchdog \
    && cp /usr/bin/fwatchdog /home/app \
    && apk del curl --no-cache


# Add non root user
RUN addgroup -S app && adduser app -S -G app

RUN chown app /home/app


# Turn down the verbosity to default level.
ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ENV=production

# Wrapper/boot-strapper
WORKDIR /app
COPY package.json .

 # Copy outer function handler
COPY . ./

RUN npm i -production

USER app

ENV cgi_headers="true"
ENV write_debug="true"

ENV fprocess="node index.js"
ENV mode="http" 
ENV upstream_url="http://127.0.0.1:3000" 
ENV exec_timeout="60s" 
ENV write_timeout="60s" 
ENV read_timeout="60s" 



#ENV write_timeout="60s"
#ENV read_timeout="60s"
#EXPOSE 8080

HEALTHCHECK --interval=1s CMD [ -e /tmp/.lock ] || exit 1
CMD ["fwatchdog"]
