#!/bin/bash
./subscripts/refreshKube.sh BYKTWD
kubectl cp $1 aquaman-apache-bf58d5d9-ttp9n:/opt/bitnami/apache/htdocs

