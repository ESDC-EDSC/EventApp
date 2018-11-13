#!/bin/bash
./subscripts/refreshKube.sh BYKTWD
kubectl cp $1 ironman-apache-7bcb947b7-hzrz9:/opt/bitnami/apache/htdocs

