#!/bin/bash
./subscripts/refreshKube.sh BYKTWD
kubectl cp $1 superman-apache-7c78c95cd6-bhz7d:/opt/bitnami/apache/htdocs

