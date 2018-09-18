#!/bin/bash
docker run --rm -ti -v $(pwd)/src:/src -p 4203:4200 users-ui /bin/sh
