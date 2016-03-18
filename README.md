# dotfiles
ubuntu conf 

## Basic 

```
sudo apt-get install git wget 
sudo apt-get install build-essential cmake libssl-dev
sudo apt-get install python-dev
```
#### Git ssh key
```
ssh-keygen -t rsa -b 4096 -C "joche.echavezm@gmail.com" 
ssh-add ~/.ssh/id_rsa

# Downloads and installs xclip. If you don't have `apt-get`, you might need to use another installer (like `yum`)
$ sudo apt-get install xclip

# Copies the contents of the id_rsa.pub file to your clipboard
$ xclip -sel clip < ~/.ssh/id_rsa.pub
```

## Console and Vim 

### ZSH
```
sudo apt-get install zsh
chsh -s /bin/zsh
```
*installing oh-my-zsh*
```
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```
> restart to take effect

*THEME bullet train*
```
wget http://raw.github.com/caiogondim/bullet-train-oh-my-zsh-theme/master/bullet-train.zsh-theme -P $ZSH_CUSTOM/themes/ 
```
*change theme*
```
sed -i 's/robbyrussell/bullet-train/i' ~/.zshrc 
```
*set custom config options*
```
echo 'export TERM="xterm-256color"
alias open="xdg-open"
BULLETTRAIN_PROMPT_CHAR=\λ
BULLETTRAIN_PROMPT_ROOT=TRUE
BULLETTRAIN_VIRTUALENV_PREFIX=env:' >> ~/.zshrc
```
*fonts*
```
git clone https://github.com/powerline/fonts.git &&
cd fonts && 
./install.sh && 
cd .. && 
rm -rf fonts &&
sudo apt-get install ttf-ancient-fonts 
```
*Set font on profile default for gnome terminal, to another console, you need do it  manualy*
```
gconftool-2 --set /apps/gnome-terminal/profiles/Default/font --type string "Meslo LG L DZ for Powerline 10"
```
*color solarized for gnomeTerminal*
```
git clone https://github.com/Anthony25/gnome-terminal-colors-solarized.git && 
cd gnome-terminal-colors-solarized/ && 
./set_dark.sh && 
cd .. && 
rm -rf gnome-terminal-colors-solarized/
```

### Vim
```
sudo apt-get install vim vim-gnome
```
*folders and patogen*
```
mkdir -p ~/.vim/autoload && 
mkdir ~/.vim/bundle &&
wget -P ~/.vim/autoload/ https://raw.githubusercontent.com/tpope/vim-pathogen/master/autoload/pathogen.vim
```
*Get vim config file*
```
wget https://raw.githubusercontent.com/jochechavez/dotfiles/master/.vimrc -q -O ~/.vimrc
```
*Plugins*
```
cd ~/.vim/bundle && 
git clone https://github.com/scrooloose/nerdtree.git &&
git clone https://github.com/scrooloose/nerdcommenter.git &&
git clone https://github.com/mattn/emmet-vim.git &&
git clone https://github.com/bling/vim-airline.git &&
git clone https://github.com/terryma/vim-multiple-cursors.git &&
git clone https://github.com/Valloric/MatchTagAlways.git && 
git clone https://github.com/pangloss/vim-javascript.git &&
git clone https://github.com/tpope/vim-fugitive.git && 
git clone https://github.com/jwalton512/vim-blade.git &&
git clone https://github.com/burnettk/vim-angular.git &&
git clone https://github.com/Valloric/YouCompleteMe.git &&
cd YouCompleteMe &&
git submodule update --init --recursive &&
./install.py
```


## Development

### xammp
*Apache*
```
sudo apt-get update &&
sudo apt-get install apache2
```
*Mysql*
```
sudo apt-get install mysql-server libapache2-mod-auth-mysql php5-mysql
```
*php5*
```
sudo apt-get install libapache2-mod-php5 php5 php5-mcrypt &&
sudo php5enmod mcrypt
```
*phpMyAdmin*
```
sudo apt-get install phpmyadmin apache2-utils &&
sudo service apache2 restart
```
### LEMP
*nginx*
```
sudo apt-get update &&
sudo apt-get install nginx
```
*MySql*
```
sudo apt-get install mysql-server
```
*PhP*
```
sudo apt-get install php5-fpm php5-mysql &&
sudo sed -i 's/;cgi.fix_pathinfo=1/cgi.fix_pathinfo=0/i' /etc/php5/fpm/php.ini &&
sudo apt-get install php5-cli &&
sudo service php5-fpm restart 
```
#### set up nginx file dafault 
```
sudo wget https://raw.githubusercontent.com/jochechavez/dotfiles/master/.nginx.default -q -O /etc/nginx/sites-available/default &&
sudo service nginx restart
```
*PhpMyadmin*
```
sudo apt-get install phpmyadmin
> in server selection dont check
> in dbconfig-common select yes 
```
```
sudo ln -s /usr/share/phpmyadmin /usr/share/nginx/html &&
sudo php5enmod mcrypt &&
sudo service php5-fpm restart
```


### laravel
*Composer*
```
curl -sS https://getcomposer.org/installer | php && 
sudo mv composer.phar /usr/local/bin/composer
```
### Java jdk jre
```
sudo apt-get install default-jdk 
sudo apt-get install default-jre
```
### Android sdk
```
wget http://dl.google.com/android/android-sdk_r24.4.1-linux.tgz &&
tar xvf android-sdk_r24.4.1-linux.tgz &&
mv android-sdk-linux android-sdk
```
> open and install/update dependencies 
`cd android-sdk/tools/ && ./android`

*Set grobal variables*
```
sudo ln -s ~/android-sdk/platform-tools/adb /bin/adb
sudo ln -s ~/android-sdk/tools/android /bin/android
sudo ln -s ~/android-sdk/tools/emulator /bin/emulator
```
> 64 bits problem, install (emulator no such file) error 2
> ```sudo apt-get install lib32z1 lib32ncurses5 lib32bz2-1.0 lib32stdc++6```

### nodejs 4.2.3 LTS version
```
wget https://nodejs.org/dist/v4.2.3/node-v4.2.3.tar.gz &&
tar zxvf node-v4.2.3.tar.gz &&
cd node-v4.2.3 &&
./configure &&
make  &&
sudo make install &&
cd .. && rm -rf node-v4.2.3.tar.gz node-v4.2.3
```
*npm basics*
```
sudo npm install -g grunt gulp http-server bower
```
### ionic cordova React native
```
sudo npm install -g cordova ionic react-native-cli
```

**Unable to download JS bundle**
```
sudo react-native start > /dev/null 2>&1 &
adb reverse tcp:8081 tcp:8081
```

### pip virtualenv
#### Python 3
```
sudo apt-get install python3.4-dev
wget https://bootstrap.pypa.io/get-pip.py && sudo python get-pip.py && rm get-pip.py
sudo pip install --upgrade virtualenv

virtualenv --no-site-packages --distribute -p /usr/bin/python3.3 ~/.virtualenvs/<project>
```

 ### ruby2.2 and rails
 ```
 sudo apt-add-repository ppa:brightbox/ruby-ng
 sudo apt-get update
 sudo apt-get install ruby2.2 
 sudo gem install rails
 ```
