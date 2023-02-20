#!/bin/bash
# author:qizhihu

# 每天10:30执行
30 10 * * * ./warm.sh | crontab -e > ./log/result 2>&1
