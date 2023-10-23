# tsconfig.json 配置项

```json
{
  "compilerOptions": {
    /* Projects */
    "incremental": true /* 保存.tsbuildinfo文件以允许增量编译项目 */,
    "composite": true /* 启用允许TypeScript项目与项目引用一起使用的约束 */,
    "tsBuildInfoFile": "./.tsbuildinfo" /* 指定.tsbuildinfo增量编译文件的路径。 */,
    "disableSourceOfProjectReferenceRedirect": true /* 在引用复合项目时，禁用首选源文件而不是声明文件。  */,
    "disableSolutionSearching": true /* 编辑时将项目从多项目参照检查中选择出来 */,
    "disableReferencedProjectLoad": true /* 减少TypeScript自动加载的项目数量 */,

    /* Language and Environment */
    "target": "es5" /* 为已发出的JavaScript设置JavaScript语言版本，并包含兼容的库声明 */,
    "lib": [] /* 指定一组描述目标运行时环境的绑定库声明文件 */,
    "jsx": "preserve" /* 指定生成的JSX代码 */,
    "experimentalDecorators": true /* 启用对TC39第2阶段草稿装饰器的实验性支持 */,
    "emitDecoratorMetadata": true /* 为源文件中的修饰声明发出设计类型元数据。 */,
    "jsxFactory": "" /* 指定针对React JSX emit时使用的JSX工厂函数，例如“React.createElement”或“h” */,
    "jsxFragmentFactory": "" /* 指定针对React JSX发射的片段时用于片段的JSX片段引用，例如“React.Fraggment”或“Fragment”。 */,
    "jsxImportSource": "" /* 指定在使用“JSX:areact JSX*”时用于导入JSX工厂函数的模块说明符 */,
    "reactNamespace": "" /* 指定为“createElement”调用的对象。这仅适用于以“反应”JSX发射为目标的情况。  */,
    "noLib": true /* 禁用包含任何库文件，包括默认的lib.d.ts。 */,
    "useDefineForClassFields": true /* 发出符合ECMAScript标准的类字段。 */,
    "moduleDetection": "auto" /* 控制使用何种方法检测模块格式的JS文件。 */,

    /* Modules */
    "module": "commonjs" /* 指定生成的模块代码。  */,
    "rootDir": "./" /* 指定源文件中的根文件夹。 */,
    "moduleResolution": "node" /* 指定TypeScript如何从给定的模块说明符中查找文件。 */,
    "baseUrl": "./" /* 指定用于解析非相对模块名称的基本目录。 */,
    "paths": {} /* 指定一组条目，用于将导入重新映射到其他查找位置。 */,
    "rootDirs": [] /* 在解析模块时，允许将多个文件夹视为一个文件夹 */,
    "typeRoots": [] /* 指定多个类似“”的文件夹/node_modules/@types’。 */,
    "types": [] /* 指定要包含的类型包名称，而不在源文件中引用 */,
    "allowUmdGlobalAccess": true /* 允许从模块访问UMD全局。 */,
    "moduleSuffixes": [] /* 解析模块时要搜索的文件名后缀列表。 */,
    "resolveJsonModule": true /* 启用导入.json文件。  */,
    "noResolve": true /* 禁止“import”、“require”或“<reference>”扩展TypeScript应添加到项目中的文件数 */,

    /* JavaScript Support */
    "allowJs": true /* 允许JavaScript文件成为程序的一部分。使用“checkJS”选项可以从这些文件中获取错误。 */,
    "checkJs": true /* 在类型检查的JavaScript文件中启用错误报告。 */,
    "maxNodeModuleJsDepth": 1 /* 指定用于检查“node_modules”中JavaScript文件的最大文件夹深度。仅适用于“allowJs”。  */,

    /* Emit */
    "declaration": true /* 从项目中的TypeScript和JavaScript文件生成.d.ts文件。 */,
    "declarationMap": true /* 为d.ts文件创建源映射。 */,
    "emitDeclarationOnly": true /* 只输出d.ts文件，不输出JavaScript文件 */,
    "sourceMap": true /* 为发出的JavaScript文件创建源映射文件。  */,
    "outFile": "./" /* 指定一个将所有输出捆绑到一个JavaScript文件中的文件。如果“declaration”为true，还指定一个绑定所有.d.ts输出的文件。  */,
    "outDir": "./" /* 为所有发出的文件指定一个输出文件夹。 */,
    "removeComments": true /* 去注释 */,
    "noEmit": true /* 禁用从编译中发出文件。 */,
    "importHelpers": true /* 允许每个项目从tslib导入一次辅助函数，而不是每个文件都包含这些函数 */,
    "importsNotUsedAsValues": "remove" /* 为仅用于类型的导入指定发出/检查行为。 */,
    "downlevelIteration": true /* 为迭代发出更兼容但冗长且性能较差的JavaScript */,
    "sourceRoot": "" /* 指定调试器查找引用源代码的根路径 */,
    "mapRoot": "" /* 指定调试器应定位映射文件的位置，而不是生成的位置 */,
    "inlineSourceMap": true /* 在发出的JavaScript中包含源映射文件 */,
    "inlineSources": true /* 在发出的JavaScript中的源映射中包含源代码 */,
    "emitBOM": true /* 在输出文件的开头发出UTF-8字节顺序标记（BOM）。  */,
    "newLine": "crlf" /* 设置发出文件的换行符 */,
    "stripInternal": true /* 禁用在其JSDoc注释中包含“@internal”的发出声明 */,
    "noEmitHelpers": true /* 禁用在编译输出中生成自定义帮助程序函数，如“__extends” */,
    "noEmitOnError": true /* 如果报告了任何类型检查错误，则禁用发送文件。 */,
    "preserveConstEnums": true /* 禁用在生成的代码中擦除“const enum”声明 */,
    "declarationDir": "./" /* 为生成的声明文件指定输出目录。  */,
    "preserveValueImports": true /* 在JavaScript输出中保留未使用的导入值，否则这些值将被删除。 */,

    /* Interop Constraints */
    "isolatedModules": true /* 确保每个文件都可以在不依赖其他导入的情况下安全地进行传输 */,
    "allowSyntheticDefaultImports": true /* 当模块没有默认导出时，允许“从y导入x” */,
    "esModuleInterop": true /* 发出额外的JavaScript以简化对导入CommonJS模块的支持。这为类型兼容性启用了“allowSyntheticDefaultImports”。  */,
    "preserveSymlinks": true /* 禁用将符号链接解析为其真实路径。这与节点中的相同标志相关。  */,
    "forceConsistentCasingInFileNames": true /* 确保套管在进口时是正确的 */,

    /* Type Checking */
    "strict": true /* 启用所有严格的类型检查选项 */,
    "noImplicitAny": true /* 为具有隐含“any”类型的表达式和声明启用错误报告。 */,
    "strictNullChecks": true /* 在类型检查时，请考虑“null”和“undefined”。  */,
    "strictFunctionTypes": true /* 分配函数时，请检查以确保参数和返回值与子类型兼容  */,
    "strictBindCallApply": true /* 请检查“bind”、“call”和“apply”方法的参数是否与原始函数匹配。 */,
    "strictPropertyInitialization": true /* 检查构造函数中已声明但未设置的类属性。 */,
    "noImplicitThis": true /* 当“this”的类型为“any”时，启用错误报告。  */,
    "useUnknownInCatchVariables": true /* 将catch子句变量默认为“unknown”，而不是“any”。  */,
    "alwaysStrict": true /* 确保始终发出“use strict”。 */,
    "noUnusedLocals": true /* 在未读取本地变量时启用错误报告。  */,
    "noUnusedParameters": true /* 未读取函数参数时引发错误。  */,
    "exactOptionalPropertyTypes": true /* 将可选属性类型解释为写入的，而不是添加“未定义”。 */,
    "noImplicitReturns": true /* 为函数中未显式返回的代码路径启用错误报告。 */,
    "noFallthroughCasesInSwitch": true /* 为switch语句中的失败情况启用错误报告。  */,
    "noUncheckedIndexedAccess": true /* 使用索引访问时，将“undefined”添加到类型中。 */,
    "noImplicitOverride": true /* 确保用重写修饰符标记派生类中的重写成员。 */,
    "noPropertyAccessFromIndexSignature": true /* 对使用索引类型声明的键强制使用索引访问器。 */,
    "allowUnusedLabels": true /* 禁用未使用标签的错误报告。 */,
    "allowUnreachableCode": true /* 禁用无法访问的代码的错误报告。  */,

    /* Completeness */
    "skipDefaultLibCheck": true /* 跳过TypeScript中包含的.d.ts文件的类型检查。 */,
    "skipLibCheck": true /* 跳过对所有.d.ts文件的类型检查。 */
  }
}
```

```json
{
  "compilerOptions": {
    /* 基本选项 */
    "target": "es5", // 生成代码的 ECMAScript 目标版本
    "module": "commonjs", // 生成代码的模块标准
    "lib": ["es6", "dom"], // 编译过程中需要引入的库文件的列表
    "allowJs": true, // 是否编译 JS 文件
    "checkJs": true, // 是否在 JS 文件中报告错误
    "jsx": "preserve", // 在 .tsx 文件里支持 JSX: 'preserve', 'react-native', or 'react'
    "declaration": true, // 是否生成 .d.ts 类型定义文件
    "emitDeclarationOnly": true, // 只生成类型声明文件，不生成js
    "declarationMap": true, // 为每个 .d.ts 文件生成 sourcemap
    "sourceMap": true, // 是否生成 .map 文件
    "outFile": "./dist/main.js", // 将多个输出文件合并为一个文件
    "outDir": "./dist", // 输出文件夹
    "rootDir": "./", // 指定 TypeScript 编译器查找 TypeScript 文件的根目录，通常用于控制输入文件的搜索路径。假设你的 TypeScript 文件存储在项目的根目录下，你可以配置为 './'
    "composite": true, // 生成额外的元数据文件，这些文件可以帮助构建工具（包括TypeScript自身的--build模式）更快地确定项目是否已经被构建。
    "removeComments": true, // 删除注释
    "noEmit": true, // 不输出文件
    "importHelpers": true, // 通过 tslib 引入辅助工具函数
    "downlevelIteration": true, // 是否添加对迭代器和生成器的补丁（es6+无需关注）
    "useDefineForClassFields": true, // 是否使用 Object.defineProperty 定义类实例属性

    /* 严格的类型检查 */
    "strict": true, // 启用所有严格类型检查
    "noImplicitAny": true, // 不允许隐式的 any 类型
    "strictNullChecks": true, // 不允许把 null、undefined 赋值给其他类型变量
    "strictFunctionTypes": true, // 严格检查函数的类型
    "strictBindCallApply": true, // 严格检查 bind、call 和 apply 的参数规则
    "strictPropertyInitialization": true, // 类的实例属性必须初始化
    "noImplicitThis": true, // 不允许 this 有隐式的 any类型
    "noUnusedLocals": true, // 检查未使用的局部变量
    "noUnusedParameters": true, // 检查未使用的参数
    "noImplicitReturns": true, // 每个分支都会有返回值
    "noFallthroughCasesInSwitch": true, // 检查 switch 语句包含正确的 break

    /* 模块解析 */
    "isolatedModules": true, // 控制是否将每个文件作为单独的模块处理。
    "moduleResolution": "node", // 模块解析策略
    "allowImportingTsExtensions": true, // 允许从没有默认导出的模块中导入类型定义(.d.ts)文件  --- ?
    "baseUrl": "./", // 解析使用非相对路径导入模块时的基地址
    "paths": {}, // 模块名称到基于 baseUrl 的路径映射表
    "rootDirs": [], // 将多个文件夹放在一个虚拟目录下，合并多个源文件目录
    "typeRoots": [], // typeRoots用来指定声明文件或文件夹的路径列表，如果指定了此项，则只有在这里列出的声明文件才会被加载
    "types": [], // types用来指定需要包含的模块，只有在这里列出的模块的声明文件才会被加载进来
    "allowSyntheticDefaultImports": true, // 允许从没有默认导出的模块默认导入
    "esModuleInterop": true, // 通过创建命名空间实现 CommonJS 兼容性
    "resolveJsonModule": true, // 自动解析JSON文件

    /* Source Map */
    "sourceRoot": "", // TypeScript 源代码所在的目录
    "mapRoot": "", // mapRoot用于指定调试器找到映射文件而非生成文件的位置，指定map文件的根路径，该选项会影响.map文件中的sources属性
    "inlineSourceMap": true, // 生成单个 sourcemaps 文件,而不是将 sourcemaps 生成不同的文件
    "inlineSources": true, // 将代码与 sourcemaps 生成到一个文件中

    /* 实验性 */
    "experimentalDecorators": true, // 启用实验性的装饰器特性
    "emitDecoratorMetadata": true // 为装饰器提供元数据支持
  },

  "files": [], // files可以配置一个数组列表,里面包含指定文件的相对或绝对路径,编译器在编译的时候只会编译包含在files中列出的文件,如果不指定,则取决于有没有设置include选项,如果没有include选项,则默认会编译根目录以及所有子目录中的文件。这里列出的路径必须是指定文件,而不是某个文件夹,而且不能使用* ? **/ 等通配符
  "include": [], // include也可以指定要编译的路径列表,但是和files的区别在于,这里的路径可以是文件夹,也可以是文件,可以使用相对和绝对路径,而且可以使用通配符,比如"./src"即表示要编译src文件夹下的所有文件以及子文件夹的文件
  "exclude": [], // exclude表示要排除的、不编译的文件,它也可以指定一个列表,规则和include一样,可以是文件或文件夹,可以是相对路径或绝对路径,可以使用通配符
  "extends": "", // extends可以通过指定一个其他的tsconfig.json文件路径,来继承这个配置文件里的配置,继承来的文件的配置会覆盖当前文件定义的配置。TS在3.2版本开始,支持继承一个来自Node.js包的tsconfig.json配置文件
  "compileOnSave": true, // compileOnSave的值是true或false,如果设为true,在我们编辑了项目中的文件保存的时候,编辑器会根据tsconfig.json中的配置重新生成文件,不过这个要编辑器支持
  "references": [] // 一个对象数组,指定要引用的项目
}
```
