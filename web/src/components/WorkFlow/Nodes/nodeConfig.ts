import {
  FaPlay,
  FaRobot,
  FaStop,
  FaTools,
  FaCommentDots,
  FaDatabase,
  FaCode,
  FaCodeBranch,
} from "react-icons/fa";
import { FaBookAtlas, FaPeopleGroup } from "react-icons/fa6";
import { TfiGithub } from "react-icons/tfi";
import { v4 as uuidv4 } from "uuid";

import AnswerNodeProperties from "./Answer/AnswerNodeProperties";
import EndNodeProperties from "./End/EndNodeProperties";
import LLMNodeProperties from "./LLM/LLMNodeProperties";
import PluginNodeProperties from "./Plugin/PluginNodeProperties";
import RetrievalProperties from "./Retrieval/RetrievalNodeProperties";
import RetrievalToolNodeProperties from "./RetrievalTool/RetrievalToolNodeProperties";
import StartNodeProperties from "./Start/StartNodeProperties";
import ToolNodeProperties from "./Tool/ToolNodeProperties";
import CrewAINodeProperties from "./CrewAI/CrewAINodeProperties";
import ClassifierNodeProperties from "./Classifier/ClassifierNodeProperties";
import { LuBrainCircuit } from "react-icons/lu";
import CodeNodeProperties from "./Code/CodeNodeProperties";
import IfElseNodeProperties from "./IfElse/IfElseNodeProperties";
import { LogicalOperator } from "../types";

interface NodeConfigItem {
  display: string;
  icon: React.ComponentType;
  colorScheme: string;
  properties: React.ComponentType<any>;
  allowedConnections: {
    sources: string[];
    targets: string[];
  };
  initialData?: Record<string, any>;
  inputVariables: string[];
  outputVariables: string[];
}

export const nodeConfig: Record<string, NodeConfigItem> = {
  start: {
    display: "Start",
    icon: FaPlay,
    colorScheme: "green",
    properties: StartNodeProperties,
    allowedConnections: {
      sources: ["right"],
      targets: [],
    },
    inputVariables: [],
    outputVariables: ["query"],
  },
  end: {
    display: "End",
    icon: FaStop,
    colorScheme: "pink",
    properties: EndNodeProperties,
    allowedConnections: {
      sources: [],
      targets: ["left"],
    },
    inputVariables: [],
    outputVariables: [],
  },
  llm: {
    display: "LLM",
    icon: FaRobot,
    colorScheme: "blue",
    properties: LLMNodeProperties,
    allowedConnections: {
      sources: ["left", "right"],
      targets: ["left", "right"],
    },
    initialData: {
      model: "glm-4-flash",
      temperature: 0.1,
      systemMessage: null,
    },
    inputVariables: [],
    outputVariables: ["response"],
  },
  tool: {
    display: "Tools",
    icon: FaTools,
    colorScheme: "purple",
    properties: ToolNodeProperties,
    allowedConnections: {
      sources: ["right"],
      targets: ["left"],
    },
    initialData: {
      tools: ["Open Weather"],
    },
    inputVariables: [],
    outputVariables: ["response"],
  },
  plugin: {
    display: "Plugin",
    icon: TfiGithub,
    colorScheme: "gray",
    properties: PluginNodeProperties,
    initialData: {
      toolName: "",
      args: {},
    },
    allowedConnections: {
      sources: ["right"],
      targets: ["left"],
    },
    inputVariables: [],
    outputVariables: ["response"],
  },

  retrieval: {
    display: "KB Retrieval",
    icon: FaBookAtlas,
    colorScheme: "red",
    properties: RetrievalProperties,
    initialData: {
      query: null,
      rag_method: "Adaptive_RAG",
      knownledge_database: [],
      usr_id: "",
      kb_id: "",
    },
    allowedConnections: {
      sources: ["right"],
      targets: ["left"],
    },
    inputVariables: [],
    outputVariables: ["response"],
  },
  toolretrieval: {
    display: "Retrieval As Tools",
    icon: FaDatabase,
    colorScheme: "teal",
    properties: RetrievalToolNodeProperties,
    allowedConnections: {
      sources: ["right"],
      targets: ["left"],
    },
    initialData: {
      tools: [],
    },
    inputVariables: [],
    outputVariables: ["response"],
  },
  crewai: {
    display: "CrewAI",
    icon: FaPeopleGroup,
    colorScheme: "purple",
    properties: CrewAINodeProperties,
    allowedConnections: {
      sources: ["right"],
      targets: ["left"],
    },
    initialData: {
      agents: [],
      tasks: [],
      process_type: "sequential",
      llm_config: {},
      manager_config: {},
    },
    inputVariables: [],
    outputVariables: ["response"],
  },
  classifier: {
    icon: LuBrainCircuit,
    display: "Intent Recognition",
    colorScheme: "pink",
    properties: ClassifierNodeProperties,
    allowedConnections: {
      sources: [],
      targets: ["input"],
    },
    outputVariables: ["class_name"],
    inputVariables: ["Input"],
    initialData: {
      categories: [
        { category_id: uuidv4(), category_name: "" },
        { category_id: "others_category", category_name: "Others Intent" },
      ],
      model: "glm-4-flash",
    },
  },
  answer: {
    display: "Answer",
    icon: FaCommentDots,
    colorScheme: "orange",
    properties: AnswerNodeProperties,
    initialData: {
      answer: null,
    },
    allowedConnections: {
      sources: ["right"],
      targets: ["left"],
    },
    inputVariables: [],
    outputVariables: ["response"],
  },
  code: {
    display: "Code Execution",
    icon: FaCode,
    colorScheme: "purple",
    properties: CodeNodeProperties,
    allowedConnections: {
      sources: ["right"],
      targets: ["left"],
    },
    outputVariables: ["code_result"],
    inputVariables: [],
    initialData: {
      code: "",
      language: "python",
    },
  },
  ifelse: {
    display: "If-Else",
    icon: FaCodeBranch,
    colorScheme: "purple",
    properties: IfElseNodeProperties,
    initialData: {
      cases: [
        {
          case_id: uuidv4(),
          logical_operator: LogicalOperator.and,
          conditions: [],
        },
        {
          case_id: "false_else",
          logical_operator: LogicalOperator.and,
          conditions: [],
        },
      ],
    },
    allowedConnections: {
      sources: [],
      targets: ["left"],
    },
    inputVariables: [],
    outputVariables: ["result"],
  },
};

export type NodeType = keyof typeof nodeConfig;
