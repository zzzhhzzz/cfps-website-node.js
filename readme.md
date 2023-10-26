### 一、项目功能概况

#### 1.登陆注册

在原网站基础上开发登录注册功能

<center>
 <img src=".\images\3.png">
</center>

#### 2.多个单用户的notebook实现

注册成功后 后端服务器通过在.jupyter/隐藏目录下生成 jupyter_notebook_config_username.py文件并进行对应配置

主要内容如下例：

```python
# Configuration file for jupyter-notebook.                                       
c = get_config()                                                                         c.IPKernelApp.pylab = 'inline'                                                           c.NotebookApp.ip = '*'                                                                 
c.NotebookApp.open_browser = False                                               
c.NotebookApp.password = 'sha1:976bc4e3d0db:df5983c005e2d95c061426ba90c74086c57e76fd'
#passwd转换的哈希密码
c.NotebookApp.port = 7777 
#端口每次注册分配一个 一个注册用户对应唯一                                               
c.NotebookApp.notebook_dir = '/home/jupyternotebook'
#工作路径统一    
```

使用相应配置文件后台运行jupyter notebook

实现多个单用户 不同密码 不同端口 互不干扰 相同工作空间的notebook

<center>
 <img src=".\images\4.png">
</center>

#### 3.一个多用户的hub

<center>
 <img src=".\images\5.png" width="360">
</center>

Jupyterhub本身支持多用户 部署配置较为简单

#### 4.用户交互与安全

出于安全考虑notebook的单用户端口与密码由后台随机生成 但与用户相一一对应 同时加密储存在后端数据库中

<center>
 <img src=".\images\6.png" width="360">
</center>

用户通过前端注册登陆后可见随机生成的密码 并可直接跳转至相应端口的notebook

#### 5.数据可视化

<center>
 <img src=".\images\7.png" width="360">
</center>

在notebook中可使用相应文件 调用数据库和可视化

部分可视化展示：

<center>
 <img src=".\images\1.png" width="560">
 <img src=".\images\2.png" width="560">
</center>



### 二、功能模块说明

#### 1.后端

node.js模块化实现数据库连接与登陆注册

<center>
 <img src=".\images\8.png" width="500">
</center>

#### 2.前端

前端采取网站形式 实现自适应 方便功能添加

<center>
 <img src=".\images\9.png" width="360">
</center>

#### 3.数据库

##### cfps部分数据库关系图

<center>
 <img src=".\images\10.png" >
 <img src=".\images\11.png" >
 <img src=".\images\13.png" >
</center>

##### 登陆注册系统用户数据库

<center>
 <img src=".\images\15.png" >
</center>

密码进行加密

三、项目视频地址

（该网站因云服务器到期，不再支持浏览，以下是相关代码及视频）

github前端：https://github.com/zzzhhzzz/WEBSITE-CFPS-/tree/master

github后端：https://github.com/zzzhhzzz/cfps-website-node.js/tree/master

partA：https://www.bilibili.com/video/BV16P4y1G7uo/

partB：https://www.bilibili.com/video/BV1P3411e7bH/

PartC：https://www.bilibili.com/video/BV1334y1C7Pe/



