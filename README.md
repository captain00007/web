## Configuração para rodar o projeto no linux

**-Instalar rbenv (gerenciador de versões ruby)**  
Passo à passo:
* git clone https://github.com/rbenv/rbenv.git ~/.rbenv
* echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
* echo 'eval "$(rbenv init -)"' >> ~/.bashrc
* exec $SHELL
* git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
* echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
* exec $SHELL

**-Instalar ruby v2.7.2 a partir do rbenv**
rbenv install v2.7.2

**-Instalar bundler**
    gem install bundler

**-Instalar as gems usando bundler**
    bundle install

**-Instalar postgresql**
    sudo apt install postgresql postgresql-contrib

-download chromedriver



**Configurações do postgresql (linux)**

O procedimento de instalação criou uma conta de usuário chamada postgres que está associada ao role padrão do Postgres. Existem algumas maneiras de utilizar essa conta para acessar o Postgres. Uma maneira é trocar para a conta postgres em seu servidor digitando:

-Sudo -i -u postgres

Em seguida, você pode acessar o prompt do Postgres digitando:
-psql (Isso irá logar você no prompt do PostgreSQL, e daqui você está livre para interagir com o sistema de gerenciamento de banco de dados imediatamente)



**Criando um Novo Role**
-sudo -u postgres createuser --interactive
De qualquer maneira, o script solicitará que você faça algumas escolhas e, com base nas suas respostas, executará os comandos corretos do Postgres para criar um usuário baseado nas suas especificações.


Criar um banco com o nome scrap
-create database scrap

**Configurações do chromedriver**

-adicionar o executável do chrome driver ao seu Path
Linux: acrescentar esse comando no seu arquivo .bashrc
Comando: export PATH="nome_do_caminho:$PATH"

nome_do_camimho: nome corresponde ao caminho onde está o executável do chromedriver

