FROM nikolaik/python-nodejs:latest

RUN apt-get update && \

  apt-get install -y \

  neofetch \

  chromium \

  ffmpeg \

  webp \

  wget \

  mc \

  imagemagick && \

  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install 

RUN npm install yt-search

#RUN npm audit fix

#RUN npm install -g npm-check-updates

#RUN ncu --upgrade

#RUN npm install libwebp

RUN mkdir /rafzz

WORKDIR /rafzz

COPY . /rafzz

RUN python3 -m pip install -r /rafzz/requirements.txt

ENV TZ=Asia/Jakarta

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN ls
EXPOSE 5000
CMD ["npm", "run", "start"]
