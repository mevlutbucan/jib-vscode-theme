type RequiredKeys = 
    | 'default'
    | 'hover'
    | 'active'
    | 'inactive';

type AdditionalKeys =
    | "base"
    | 'text'
    | 'link'
    | 'input'
    | 'checkbox'
    | 'button'
    | 'icon'
    | 'selection'
    | 'sash'
    | 'scrollbar'
    | 'dropdown'
    | 'progress';

type DefaultType = {
    default: string;
};
type HoverType = {
    hover: string;
};
type ActivableType = {
    active: string;
    inactive: string;
};
type ShadowType = {
    workbench: string;
    editor: string;
};

type AdditionalPropType = Partial<DefaultType & HoverType & ActivableType>;

type RequiredType = {
    [key in RequiredKeys]-?: string;
};
type AdditionalType = {
    additional?: Partial<Record<AdditionalKeys, AdditionalPropType>>;
};

type SubcontainerType = RequiredType & AdditionalType;
type ContainerType = {
    workbench: SubcontainerType;
    editor: SubcontainerType;
    notification: string;
    warning: string;
    error: string;
};

type UIType = {
    none: '#00000000';
    border: string;
    background: ContainerType;
    foreground: ContainerType;
    shadow: ShadowType;
};
