FROM python:3.8-buster
LABEL maintainer="tanzimrizwan@outlook.com"

ENV PYTHONUNBUFFERED 1 

COPY ./requirements.txt /requirements.txt 

RUN apt-get update && pip install --no-cache-dir -r requirements.txt



RUN mkdir /usr/src/app 
WORKDIR /usr/src/app
COPY . /usr/src/app/ 



RUN useradd -m tanzim 
RUN chown -R tanzim /usr/src/app/
USER tanzim