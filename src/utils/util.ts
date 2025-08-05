// 获取文档类型
export function getDocumentType(fileType: string): string | null {
  const type = fileType.toLowerCase();
  if (type === "docx" || type === "doc") {
    return "word";
  } else if (type === "xlsx" || type === "xls") {
    return "cell";
  } else if (type === "pptx" || type === "ppt") {
    return "slide";
  }
  return null;
}

// 注入网站图标
export function injectFavicon(path: string): void {
  const fileType = path.split(".").pop()?.toLowerCase() || "";
  let iconPath = "";

  if (fileType === "docx" || fileType === "doc") {
    iconPath = "./img/doc-formats/docx.png";
  } else if (fileType === "xlsx" || fileType === "xls") {
    iconPath = "./img/doc-formats/xlsx.png";
  } else if (fileType === "pptx" || fileType === "ppt") {
    iconPath = "./img/doc-formats/pptx.png";
  }

  if (iconPath) {
    const link = document.querySelector("link[rel*='icon']") || document.createElement("link");
    link.setAttribute("rel", "shortcut icon");
    link.setAttribute("href", iconPath);
    document.getElementsByTagName("head")[0].appendChild(link);
  }
}
export type DocmentType = {
  fileName: string;
  file: File | null;
};

