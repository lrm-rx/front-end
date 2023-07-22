# 常用的linux命令大全

## 1. ls - 列出目录内容

列表当前目录中的文件和子目录

> ls



## 2. cd - 切换目录

切换到指定目录

> cd directory_path



## 3. pwd - 显示当前工作目录

显示当前所在的工作目录的路径

> pwd



## 4. mkdir - 创建新目录

创建一个新的目录

> mkdir directory_name



## 5. rm - 删除文件或目录

删除指定的文件或目录

> rm file_name



## 6. cp - 复制文件或目录

将文件或目录复制到指定位置

> cp source_file destination_file



## 7. mv - 移动文件或目录

将文件或目录移动到指定位置

> mv source_file destination_file



## 8. cat - 查看文件内容

显示文件的全部内容

> cat file_name



## 9. less - 分页查看文件内容

分页显示文件的内容

> less file_name



## 10. head - 查看文件开头内容

显示文件的开头部分内容

> head file_name



## 11. tail - 查看文件结尾内容

显示文件的结尾部分的内容

> tail file_name



## 12. grep - 在文件中搜索文本

在文件中搜索指定的文本

> grep "search_text" file_name



## 13. find - 在目录中搜索文件

在指定目录及其子目录中搜索文件

> find directory_path -name "file_name"



## 14. chmod - 修改文件权限

修改文件的权限

> chmod permissions file_name



## 15. chown - 修改文件所有者

修改文件的所有者

> chown new_owner file_name



## 16. chgrp - 修改文件所属组

修改文件的所属组

> chgrp new_group file_name



## 17. tar - 创建或提取归档文件

创建或提取tar归档文件

> tar options file_name



## 18. gzip - 压缩文件

使用gzip压缩文件

> gzip file_name



## 19. gunzip - 解压缩文件

解压缩使用gzip压缩的文件

> gunzip file_name



## 20. tar -xvf - 解压缩tar归档文件

解压缩tar归档文件

> tar -xvf file_name.tar



## 21. wget - 下载文件

从指定 URL 下载文件

> wget file_url



## 22. curl - 发送 HTTP 请求

使用各和协议发送HTTP请求

> curl options url



## 23. ssh - 远程登录

通过SSH协议远程登录到另一台计算机

> ssh username@hostname



## 24. scp - 复制文件到远程计算机

将文件复制到远程计算机

> scp source_file username@hostname:destination_path



## 25. grep -r  - 递归搜索文件内容

递归搜索指定目录中的文件内容

> grep -r "search_text" directory_path



## 26. ps - 查看进程状态

显示系统中运行的进程状态

> ps



## 27. top - 监视系统资源

实时监视系统资源使用情况

> top



## 28. kill - 终止进程

终止指定进程

> kill proccess_id



## 29. ifconfig - 查看网络接口配置

显示网络接口的配置信息

> ifconfig



## 30. ping  - 测试网络连接

向指定主机发送 ICMP 回显请求以测试网络连接

> ping hostname



## 31. netstat - 查看网络状态

显示网络连接/路由表和网络接口信息

> netstat



## 32. iptables - 配置防火墙规则

配置 Linux 防火墙规则

> iptables options



## 33. history - 查看命令历史记录

显示之前执行的命令历史记录

> history



## 34. useradd - 创建新用户

创建新的系统用户

> useradd username



## 35. usermod - 修改用户属性

修改现有用户的属性

> usermod options username



## 36. userdel - 删除用户

删除系统中的用户

> userdel username



## 37. su - 切换用户

切换到其他用户账号

> su username



## 38. sudo - 以超级用户权限执行命令

以超级用户权限执行指定命令

> sudo command



## 39. du - 查看文件和目录大小

显示文件和目录的磁盘使用情况

> du options file_or_directory



## 40. df - 查看磁盘空间使用情况

显示文件系统的磁盘空间使用情况

> df



## 41. passwd - 修改用户密码

用于修改指定用户的密码

> passwd username



## 42. history -c  - 清除命令历史记录

清除之前执行的命令历史记录

> history -c



## 43. alias - 创建命令别名

创建自定义的命令别名

> alias alias_name='command'



## 44. unalias - 删除命令别名

删除已创建的命令别名

> unalias alias_name



## 45. chmod -R  - 递归修改文件权限

递归修改文件及子目录的权限

> chmod -R permissioins directory_path



## 46. chown -R - 递归修改文件所有者

递归修改文件及子目录的所有者

> chown -R new_owner directory_path



## 47. chgrp -R - 递归修改文件所属组

递归修改文件及子目录的所属组

> chgrp -R new_group directory_path



## 48. tar -czvf - 压缩文件和目录

压缩文件和目录为tar归档文件

> tar -czvf archive_name.tar.gz file_or_directory



## 49. tar -xvzf - 解压缩tar.gz归档文件

解压缩tar.gz归档文件

> tar -xvzf archive_name.tar.gz



## 50. grep -i - 忽略大小写搜索文本

在文件中忽略大小写搜索指定的文本

> grep -i "search_text" file_name



## 51. find -type - 按类型搜索文件

按指定的类型在目录中搜索文件

> find directory_path -type f



## 52. ps aux - 查看详细进程信息

显示详细的进程信息, 包括所有用户的进程

> ps aux



## 53. top -n 1 -b - 以非交互方式显示系统资源

以非交互方式一次性显示系统资源的使用情况

> top -n 1 -b



## 54. killall - 终止特定名称的进程

终止所有具有指定名称的进程

> killall proccess_name



## 55. ifconfig interface up/down - 启用/禁用网络接口

启用或禁用指定的网络接口

>ifconfig interface up
>
>ifconfig interface down



## 56. ping -c -指定ICMP回显请求次数

指定发送 ICMP 回显请求的次数

> ping -c count hostname



## 57. netstat -tunlp - 查看网络端口和进程信息

显示网络端口和与之关联的进程信息

> netstat -tunlp



## 58. iptables-save - 保存防火墙规则

将当前防火墙规则保存到文件中

> iptables-save > rules_file



## 59. iptables-restore - 恢复防火墙规则

从文件中恢复防火墙规则

> iptables-restore < rules_file



## 60. adduser - 创建新用户(交互式)

以交互式创建新的系统用户

> adduser username



## 61. deluser - 删除用户(同时删除用户目录)

删除系统中的用户,并删除其关联的用户目录

> deluser --remove-home username



## 62. whoami - 查看当前用户名

显示当前登录用户的用户名

> whoami



## 63. groups - 查看用户所属组

显示指定用户所属的组列表

> groups username



## 64. uname - 显示系统信息

显示当前系统的信息

> uname



## 65. date - 显示系统日期和时间

显示当前日期和时间

> date



## 66. cal - 显示日历

显示当前月分的日历

> cal



## 67. uptime - 查看系统运行时间

显示系统的运行时间和平均负载

> uptime



## 68. free - 查看内存使用情况

显示系统的内存使用情况

> free -h



## 69. df -h -查看磁盘空间使用情况(人类可读格式)

显示文件系统的磁盘空间使用情况(以人类可读的格式)

> df -h



## 70. du -sh - 查看目录大小(总计)

显示目录的总大小

> du -sh directory_path



## 71. ifconfig -a - 查看所有网络接口配置

显示所有网络接口的配置信息

> ifconfig -a



## 72. history - 查看最近执行的命令历史记录

显示最近执行的命令历史记录

> history



## 73. route -n -查看网络路由表

显示系统的网络路由表

> route -n



## 74. alias - 查看当前命令别名

显示当前定义的命令别名

> alias



## 75. echo -输出文本

输出指定的文本内容

> echo "text"



## 76. touch - 创建空文件或修改时间戳

创建一个新的空文件或修改文件的访问和修改时间戳

> touch file_name



## 77. file -查看文件类型

确定文件的类型

> file file_name



## 78. find -mtime -按修改时间搜索文件

在指定的天数范围内按修改时间搜索文件

> find directory_path -mtime n



## 79. locate - 快速定位文件

根据数据库快速定位文件

> locate file_name



## 80. which - 查找命令的路径

查找指定命令的完整路径

> which comman name



## 81.wc - 统计文件行数/字数和字节数

统计文件的行数/字数和字节数

> wc file_name



## 82. sed - 文本流编辑器

对文本进行流式编辑和替换操作

> sed options file_name



## 83. cut - 提取文件的列

从文件中提取指定的列

> cut -f columns file_name



## 84. awk - 文本处理工具

对文本进行处理和分析

> awk 'pattern {action}' file_name



## 85. paste - 合并文件的列

将多个文件的列合并到一个文件中

> paste file1 file2



## 86. sort - 对文件进行排序

对文件进行排序

> sort file_name



## 87. uniq -去重文件的行

去除文件中的重复行

> uniq file_name



## 88. diff - 比较文件的差异

比较两个文件的差异

> diff file1 file2



## 89. patch - 应用补丁文件

根据补丁文件更新源文件

> patch file < path_file



## 90. wget -c -断点续传下载文件

断点续传方式下载文件

> wget -c file_url



## 91. curl -O -下载文件并保留原始文件名

下载文件并保留原始文件名

> curl -O file_url



## 92. tar -tvf - 查看tar归档文件内容

查看tar归档文件的内容列表

> tar -tvf archive_name.tar



## 93. tar -rvf - 向 tar 归档文件添加文件

向tar归档文件中添加文件

> tar -rvf archive_name.tar file1 file2



## 94. tar -cvf -创建tar归档文件

创建新的tar归档文件

> tar -cvf archive_name.tar file1 file2 



## 95. tar -xf -提取tar归档文件

从tar归档文件中提取文件

> tar -xf archive_naem.tar



## 96.gzip -d -解压缩.gz文件

解压缩.gz压缩文件

> gzip -d file_name.tar



## 97. bzip2 - 压缩文件

压缩文件为.bz2格式

> bzip2 file_name



## 98.bunzip2 - 解压缩.bz2文件

解压缩.bz2压缩文件

> bunzip2 file_name.bz2



## 99. zip -r -压缩文件和目录为.zip文件

压缩文件和目录为.zip格式

> zip -r archive_name.zip file_or_directory



## 100. unzip -解压缩.zip文件

解压缩.zip压缩文件 

> unzip archive_name.zip

