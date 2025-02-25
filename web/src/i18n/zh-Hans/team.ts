const translation = {
  addteam: {
    createteam: "创建应用",
    editteam: "编辑应用",
    apptype: "想要哪种应用类型？",
    nameandicon: "图标 & 名称",
    placeholderapp: "给你的应用取个名字",
    placeholderdescription: "输入应用的描述",
    description: "描述",
  },
  teamcard: {
    chatbot: {
      title: "聊天机器人",
      description: "基本的聊天机器人应用，单Agent，可以使用工具",
    },
    ragbot: {
      title: "知识库问答",
      description: "RAG应用，每次对话时可以从知识库中检索信息",
    },
    workflow: {
      title: "工作流应用",
      description: "以工作流的形式编排生成型应用，提供更多的自定义能力",
    },
    hagent: {
      title: "Hierarchical Muti-Agent",
      description:
        "Hierarchical类型的Muti-Agent，通常用于复杂任务分解和并行处理的场景",
    },
    sagent: {
      title: "Sequential Muti-Agent",
      description:
        "Sequential类型的Muti-Agent，通常用于任务分解和逐步执行的场景",
    },
  },
  teamsetting: {
    debugoverview: "调试预览",
    savedeploy: "发布",
    name: "名字",
    description: "描述",
    type: "类型",
    role: "角色",
    backstory: "背景故事",
    model: "模型",
    tools: "工具",
    knowledge: "知识库",
    chathistory: "聊天记录",
  },
  workflow: {
    nodes: {
      start: {
        title: "开始节点",
        initialInput: "初始输入",
        placeholder: "请输入初始值",
      },
      end: {
        title: "结束节点",
      },
      llm: {
        title: "语言模型",
        model: "模型",
        temperature: "温度",
        systemPrompt: "系统提示词",
        placeholder: "请输入系统提示词",
      },
      tool: {
        title: "工具",
        addTool: "添加工具",
        searchTools: "搜索工具...",
        noTools: "未选择工具",
        added: "已添加",
      },
      retrieval: {
        title: "知识检索",
        query: "查询",
        ragMethod: "RAG方法",
        database: "知识库",
        placeholder: "请输入查询内容",
        selectDatabase: "选择知识库",
        loading: "正在加载知识库...",
        error: "加载知识库失败",
        addKB: "添加知识库",
        removeKB: "移除知识库",
        noKB: "未选择知识库",
        searchKB: "搜索知识库...",
        added: "已添加",
        noDescription: "暂无描述",
        noResults: "未找到知识库",
      },
      classifier: {
        title: "意图识别",
        model: "模型",
        categories: "分类",
        category: "类别",
        addCategory: "添加类别",
        placeholder: "请输入类别名称",
        othersCategory: "其它意图",
      },
      parameterExtractor: {
        title: "参数提取器",
        model: "模型",
        parameters: "参数列表",
        parameterName: "参数名称",
        parameterType: "参数类型",
        parameterDescription: "参数描述",
        addParameter: "添加参数",
        editParameter: "编辑参数",
        namePlaceholder: "请输入参数名称",
        descriptionPlaceholder: "请输入参数描述",
        required: "必填",
        untitled: "未命名",
        extractionInstruction: "提取指令",
        instructionPlaceholder: "输入额外的指令来帮助参数提取器理解如何提取参数（可选）",
        modal: {
          title: "参数配置",
          addTitle: "添加参数",
          editTitle: "编辑参数",
          save: "保存",
          cancel: "取消",
        },
        toolImport: {
          title: "从工具导入",
          selectTool: "选择工具",
          noTool: "未选择工具",
          importButton: "导入参数",
          importSuccess: "参数导入成功",
          importError: "参数导入失败",
        }
      },
      crewai: {
        model: "模型",
        title: "多智能体",
        agents: "智能体",
        tasks: "任务",
        processType: "处理类型",
        sequential: "顺序执行",
        hierarchical: "层级执行",
        manager: "管理者配置",
        defaultManager: "默认管理者",
        customManager: "自定义管理者",
        addTaskDisabledMessage: "请先添加智能体并配置管理者（对于层级执行）",
        addTaskMessage: "添加新任务",
        agentModal: {
          title: "配置智能体",
          name: "智能体名称",
          role: "角色",
          goal: "目标",
          backstory: "背景故事",
          allowDelegation: "允许委派",
          tools: "工具",
          addTool: "添加工具",
          namePlaceholder: "输入唯一的智能体名称",
          rolePlaceholder: "例如：研究专家",
          goalPlaceholder: "智能体的主要目标",
          backstoryPlaceholder: "智能体的背景和专长",
          uniqueNameError: "智能体名称必须唯一",
        },
        taskModal: {
          title: "任务配置",
          name: "任务名称",
          description: "描述",
          assignAgent: "分配智能体",
          expectedOutput: "预期输出",
          namePlaceholder: "输入唯一的任务名称",
          descriptionPlaceholder: "任务描述",
          expectedOutputPlaceholder: "预期输出格式或描述",
          selectAgent: "选择智能体",
          uniqueNameError: "任务名称必须唯一",
        },
      },
      ifelse: {
        operators: {
          contains: "包含",
          notContains: "不包含",
          startWith: "开始是",
          endWith: "结束是",
          equal: "是",
          notEqual: "不是",
          empty: "为空",
          notEmpty: "不为空",
        },
      },
      code: {
        title: "代码节点",
        inputVariables: "输入变量",
        variableName: "输入变量名",
        selectVariable: "选择变量",
        addVariable: "添加变量",
        pythonCode: "Python 代码",
        executionResult: "执行结果",
        placeholder: {
          variableName: "输入变量名",
          selectVariable: "选择变量",
        },
      },
      human: {
        nodeTitle: "人工节点",
        interactionType: "交互类型",
        types: {
          toolReview: "工具调用审核",
          outputReview: "内容审核",
          contextInput: "询问人类补充信息",
        },
        title: "标题",
        titlePlaceholder: "请输入节点标题",
        routes: "路由配置",
        // Tool Review routes
        approveRoute: "同意后跳转到",
        rejectRoute: "拒绝后跳转到",
        updateRoute: "修改参数后跳转到",
        feedbackRoute: "反馈后跳转到",
        // Output Review routes
        reviewRoute: "审核通过后跳转到",
        editRoute: "修改内容后跳转到",
        // Context Input routes
        continueRoute: "提供信息后继续到",
        defaultTitles: {
          toolReview: "请审核工具调用请求",
          outputReview: "请审核AI生成的内容",
          contextInput: "需要您的补充信息",
        },
      },
    },
    common: {
      add: "添加",
      edit: "编辑",
      delete: "删除",
      save: "保存",
      cancel: "取消",
      search: "搜索",
      noResults: "未找到结果",
    },
    flowVisualizer: {
      tooltips: {
        showMinimap: "显示Minimap",
        hideMinimap: "隐藏Minimap",
        autoLayout: "整理节点",
        help: "快捷键帮助",
      },
      shortcuts: {
        title: "快捷键",
        edgeType: "更改边类型",
        delete: "删除",
        info: {
          title: "信息",
          solidLine: "实线: 普通连接",
          dashedLine: "虚线: 条件连接",
        },
      },
      zoom: "缩放",
      debug: {
        title: "调试",
        loading: "加载中...",
        error: "错误",
        preview: "调试预览",
      },
      actions: {
        debug: "调试",
        publish: "发布",
        apiKey: "API密钥",
        save: "保存",
        saving: "保存中...",
      },
      contextMenu: {
        delete: "删节点",
        error: {
          title: "无法删除节点",
          description: "无法删除{type}节点。",
        },
      },
    },
    nodeMenu: {
      title: "节点",
      plugins: "插件",
      loading: "加载工具中...",
      error: "加载工具失败",
      tools: "工具",
      subgraphs: "子图",
    },
    variableSelector: {
      availableVariables: "可用变量",
      noVariables: "没有可用变量",
      placeholder: "在此处编写。使用 '/' 插入变量。",
    },
  },
};

export default translation;
