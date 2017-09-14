# 蓝牙 BLE
-----
# 1.概念

- **Generic Attribute Profile (GATT)**

通过BLE连接，读写属性类小数据的Profile通用规范。现在所有的BLE应用Profile都是基于GATT的。

- **Attribute Protocol (ATT)**

GATT是基于ATT Protocol的。ATT针对BLE设备做了专门的优化，具体就是在传输过程中使用尽量少的数据。每个属性都有一个唯一的UUID，属性将以Characteristics and Services的形式传输。

- **Profile**

Profile可以理解为一种规范，一个标准的通信协议，它存在于从机中。蓝牙组织规定了一些标准的Profile，例如 HID OVER GATT ，防丢器 ，心率计等。每个Profile中会包含多个Service，每个Service代表从机的一种能力。

- **Service**

Service可以理解为一个服务，在BLE从机中，通过有多个服务，例如电量信息服务、系统信息服务等，每个Service中又包含多个Characteristic特征值。每个具体的Characteristic特征值才是BLE通信的主题。比如当前的电量是80%，所以会通过电量的Characteristic特征值存在从机的Profile里，这样主机就可以通过这个Characteristic来读取80%这个数据

- **Characteristic**

Characteristic：特征值，BLE主、从机的通信均是通过Characteristic来实现，可以理解为一个标签，通过这个标签可以获取或者写入想要的内容。

Characteristic可以理解为一个数据类型，它包括一个Value 和 0至多个对Value的描述（Descriptor）。

- **Descriptor**
对Characteristic的描述，例如范围、计量单位等
- **UUID(Universal Unique Identifier)**
UUID，全球惟一标识符，我们刚才提到的service和characteristic，都需要一个唯一的uuid来标识


> 总结：每个从机都会有一个叫做Profile的东西存在，不管是自定义的Profile，还是标准的防丢器Profile，他们都是由一系列Service组成，然后每个Service又包含了多个Characteristic，主机和从机之间的通信，均是通过Characteristic来实现。
# 中心设备和外围设备（Central vs Peripheral）

# BLE分为三部分Service、Characteristic、Descriptor

BLE分为三部分Service、Characteristic、Descriptor，这三部分都由UUID作为唯一标示符。

一个蓝牙4.0的终端可以包含多个Service，
一个Service可以包含多个Characteristic，
一个Characteristic包含一个Value和多个Descriptor，
一个Descriptor包含一个Value。


一般来说，Characteristic是手机与BLE终端交换数据的关键，Characteristic有较多的跟权限相关的字段，例如PERMISSION和PROPERTY，

而其中最常用的是PROPERTY，本文所用的BLE蓝牙模块竟然没有标准的Characteristic的PERMISSION。

Characteristic的PROPERTY可以通过位运算符组合来设置读写属性，例如READ|WRITE、READ|WRITE_NO_RESPONSE|NOTIFY，因此读取PROPERTY后要分解成所用的组



广播（advertising）：只有从设备处于广播状态，主机才能够搜索到
# 工具

## 1. BLE Scanner
![BLE Scanner: Read,Write,Notify](http://android-artworks.25pp.com/fs08/2016/09/26/11/102_300601718e792ca7b869f02edbff07bc_con_130x130.png =100x100)
