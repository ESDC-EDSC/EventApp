#!/bin/bash
files=../www/*
for f in ${files}
do
  kubectl cp $f aquaman-apache-bf58d5d9-ttp9n:/opt/bitnami/apache/htdocs
done

