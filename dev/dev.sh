#!/bin/bash
echo "corriendo en el puerto 10105"
docker run --rm -ti --name users-ui -v $(pwd)/src:/src -p 10105:4200 desarrollo-ui
