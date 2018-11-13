#!/bin/bash
./subscripts/refreshKube.sh BYKTWD
kubectl cp $1 batman-apache-555b4b4dcd-zp52r:/opt/bitnami/apache/htdocs

