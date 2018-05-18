Yeoman React Component/Container generator 
=============
## Installation
```
npm i -g yo
git clone git@github.com:max-gram/generator-react.git
cd generator-react
npm link
```

## Usage
Generating component
```
yo react DesiredName # generates Component files @ ./DesiredName/
yo react DesiredName path/to/folder --component # generates Component files @ path/to/folder/DesiredName/
yo react DesiredName path/to/folder --com # generates Component files @ path/to/folder/DesiredName/
yo react:component DesiredName path/to/folder # generates Component files @ path/to/folder/DesiredName/
yo react:component DesiredName # generates Component files @ ./DesiredName/
```

Generating container
```
yo react DesiredName path/to/folder --container # generates Container files @ path/to/folder/DesiredName/
yo react DesiredName path/to/folder --con # generates Container files @ path/to/folder/DesiredName/
yo react DesiredName --con # generates Container files @ ./DesiredName/
yo react:container DesiredName path/to/folder # generates Container files @ path/to/folder/DesiredName/
yo react:container DesiredName # generates Container files @ ./DesiredName/
```
