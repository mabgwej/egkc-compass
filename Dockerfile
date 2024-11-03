# Ubuntu Base image with nodejs18.x
FROM escoacrprod01.azurecr.io/esco/ubuntu22/nodejs:20.x
USER root
# Installing required packages
RUN apt-get update && apt-get install -y \
    curl \
    git \
    vim \
    && rm -rf /var/lib/apt/lists/*
# Adding application specific group and user
RUN groupadd -g 1999 esgh-grp && useradd -r -u 1999 -g esgh-grp esgh

RUN mkdir -p /home/esgh
# Creating application directory and switching
WORKDIR /app

RUN chmod 777 /app && chown esgh:esgh-grp /app

COPY --chown=esgh:esgh-grp . /app/
# RUN npm install && npm run build
RUN npm install
RUN chown esgh:esgh-grp /app -R && chmod a+rwx /app/node_modules && chmod a+rwx /app/start.sh
RUN chown esgh:esgh-grp /home/esgh -R && chown esgh:esgh-grp /home/esgh/ -R
EXPOSE 3000
# Switching user to application user from root
USER esgh 
# Running the application
CMD [ "npm", "start"]
# CMD [ "serve", "-s", "build"]
# CMD ["bash", "/app/start.sh"]
