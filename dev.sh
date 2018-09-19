#!/bin/bash
docker run --rm -ti -v $(pwd)/src:/src -p 10105:4200 users-ui /bin/sh
