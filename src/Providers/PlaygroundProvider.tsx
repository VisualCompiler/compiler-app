import { createContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { v4 } from 'uuid'

export interface FileType {
  id: string
  title: string
  code: string
}

export interface FolderType {
  id: string
  title: string
  files: FileType[]
}

export interface PlaygroundContextType {
  folders: FolderType[]
  createNewPlayground: (newPlayground: {
    folderName: string
    fileName: string
  }) => void
  deleteFolder: (id: string) => void
  deleteFile: (folderId: string, fileId: string) => void
  createPlaygroundCard: (
    folderId: string,
    fileTitle: string,
    code: string
  ) => void
  getCode: (fileId: string, folderId: string) => string
  saveCode: (folderId: string, fileId: string, newCode: string) => void
  saveNewPlayground: (newPlayground: {
    folderName: string
    fileName: string
    code: string
  }) => void
}

// traverses data between children
export const PlaygroundContext = createContext<
  PlaygroundContextType | undefined
>(undefined)

const defaultCodeFibonacci = `int fib(int n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }

    int a = 0;
    int b = 1;
    int i = 2;

    while (i <= n) {
        int next = a + b;
        a = b;
        b = next;
        i = i + 1;
    }

    return b;
}

int main(void) {
    int x = 10;
    int result = fib(x); 
    return result;
}`

const defaultCodeVariablesAndIf = `
int popcount(int n) {
    int count = 0;
    while (n > 0) {
        int rem = n - (n / 2) * 2;   
        if (rem) {
            count = count + 1;
        }
        n = n / 2;                   
    }
    return count;
}

int parity(int n) {
    int p = 0;
    while (n > 0) {
        int rem = n - (n / 2) * 2;  
        if (rem) {
            if (p) {
                p = 0;
            } else {
                p = 1;
            }
        }
        n = n / 2;
    }
    return p;
}

int main() {
    int x = 29;         
    int c = popcount(x); 
    int p = parity(c);  
    return c + p;        
}
`
// preview some initial data (folder, file)
const initialData = [
  {
    id: 'root',
    title: '-',
    files: [
      {
        id: v4(),
        title: 'Fibonacci',
        code: defaultCodeFibonacci,
      },
      {
        id: v4(),
        title: 'CountBits',
        code: defaultCodeVariablesAndIf,
      },
    ],
  },
]

interface PlaygroundProviderProps {
  children: ReactNode
}

export const PlaygroundProvider: React.FC<PlaygroundProviderProps> = ({
  children,
}) => {
  const [folders, setFolders] = useState(() => {
    const localData = localStorage.getItem('data')
    if (localData) {
      // when loading the page, check if we already have folders in storage
      return JSON.parse(localData)
    }
    return initialData
  })

  // load the preview data when opening
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(folders))
  }, [])

  class FolderItem {
    id: string
    title: string
    files: FileType[]

    constructor({
      id,
      title,
      files,
    }: {
      id: string
      title: string
      files: FileType[]
    }) {
      this.id = id
      this.title = title
      this.files = files
    }
  }

  // create new playground, update existing folders and files, save it in local storage
  const createNewPlayground = (newPlayground: {
    folderName: string
    fileName: string
  }) => {
    const { folderName, fileName } = newPlayground
    const newFolders = [...folders]

    newFolders.push(
      new FolderItem({
        id: v4(),
        title: folderName,
        files: [
          {
            id: v4(),
            title: fileName,
            code: '',
          },
        ],
      })
    )
    localStorage.setItem('data', JSON.stringify(newFolders))
    setFolders(newFolders)
  }

  const saveNewPlayground = (newPlayground: {
    folderName: string
    fileName: string
    code: string
  }) => {
    const { folderName, fileName, code } = newPlayground
    const newFolders = [...folders]

    const folderId = v4()
    const fileId = v4()
    newFolders.push(
      new FolderItem({
        id: folderId,
        title: folderName,
        files: [
          {
            id: fileId,
            title: fileName,
            code: code,
          },
        ],
      })
    )
    localStorage.setItem('data', JSON.stringify(newFolders))
    setFolders(newFolders)
  }
  // based on given folder ID, delete it from folders and localstorage
  // remove it through filtering the id and return list without it
  const deleteFolder = (id: string) => {
    const updatedFolderList = folders.filter(
      (folderItem: FolderItem) => folderItem.id !== id
    )
    localStorage.setItem('data', JSON.stringify(updatedFolderList))
    setFolders(updatedFolderList)
  }

  // delete specific file given an ID
  const deleteFile = (folderId: string, fileId: string) => {
    const copiedFolders = [...folders]
    for (let i = 0; i < copiedFolders.length; i++) {
      if (folderId === copiedFolders[i].id) {
        const files = [...copiedFolders[i].files]
        copiedFolders[i].files = files.filter((file) => {
          return file.id !== fileId
        })
        break
      }
    }
    localStorage.setItem('data', JSON.stringify(copiedFolders))
    setFolders(copiedFolders)
  }

  // create a new playground card (new file in existing folder)
  const createPlaygroundCard = (
    folderId: string,
    fileTitle: string,
    code: string
  ) => {
    const copiedFolders = [...folders]
    for (let i = 0; i < copiedFolders.length; i++) {
      if (copiedFolders[i].id === folderId) {
        copiedFolders[i].files.push({
          id: v4(),
          title: fileTitle,
          code: code,
        })
        break
      }
    }
    localStorage.setItem('data', JSON.stringify(copiedFolders))
    setFolders(copiedFolders)
  }

  // get code that is saved in the file with fileId
  const getCode = (fileId: string, folderId: string) => {
    const folder = folders.find((f: FolderItem) => f.id === folderId)
    if (!folder) return ''

    const file = folder.files.find((f: FolderItem) => f.id === fileId)
    return file?.code || ''
  }

  // save the new code to file with fileId
  const saveCode = (folderId: string, fileId: string, newCode: string) => {
    const copiedFolders = [...folders]
    for (let i = 0; i < copiedFolders.length; i++) {
      if (copiedFolders[i].id === folderId) {
        const files = copiedFolders[i].files
        for (let j = 0; j < files.length; j++) {
          if (files[j].id === fileId) {
            files[j].code = newCode
            break
          }
        }
      }
    }
    localStorage.setItem('data', JSON.stringify(copiedFolders))
    setFolders(copiedFolders)
  }

  const playgroundFeatures = {
    folders,
    createNewPlayground,
    deleteFolder,
    deleteFile,
    createPlaygroundCard,
    getCode,
    saveCode,
    saveNewPlayground,
  }

  return (
    <PlaygroundContext.Provider value={playgroundFeatures}>
      {children}
    </PlaygroundContext.Provider>
  )
}
