#!/bin/bash
./subscripts/refreshKube.sh BYKTWD
kubectl cp $1 spiderman-apache-67576c74db-d8tns:/opt/bitnami/apache/htdocs

