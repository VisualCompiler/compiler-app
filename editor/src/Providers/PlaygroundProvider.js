import { createContext, useContext, useEffect, useState } from 'react'
import { v4 } from 'uuid'

// traverses data between children
export const PlaygroundContext = createContext()

// preview some initial data (folder, file)
const initialData = [
  {
    id: v4(),
    title: 'Hello World',
    files: [
      {
        id: v4(),
        title: 'index',
        code: `#include<stdio.h>
            int main() {
                printf("Hello World\\n");
            return 0;
            }`,
      },
    ],
  },
]

const defaultCode = `#include<stdio.h>
            int main() {
                printf("Hello World\\n");
            return 0;
            }`

export const PlaygroundProvider = ({ children }) => {
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

  // update existing folders and files, save it in local storage
  const createNewPlayground = (newPlayground) => {
    const { folderName, fileName } = newPlayground
    const newFolders = [...folders]
    newFolders.push({
      id: v4(),
      title: folderName,
      files: [
        {
          id: v4(),
          title: fileName,
          code: defaultCode,
        },
      ],
    })
    localStorage.setItem('data', JSON.stringify(newFolders))
    setFolders(newFolders)
  }

  // based on given folder ID, delete it from folders and localstorage
  // remove it through filtering the id and return list without it
  const deleteFolder = (id) => {
    const updatedFolderList = folders.filter((folderItem) => {
      return folderItem.id !== id
    })
    localStorage.setItem('data', JSON.stringify(updatedFolderList))
    setFolders(updatedFolderList)
  }
  // delete specific file given an ID
  const deleteFile = (folderId, fileId) => {
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
  const createPlaygroundCard = (folderId, fileTitle) => {
    const copiedFolders = [...folders]
    for (let i = 0; i < copiedFolders.length; i++) {
      if (copiedFolders[i].id === folderId) {
        copiedFolders[i].files.push({
          id: v4(),
          title: fileTitle,
          code: defaultCode,
        })
        break
      }
    }
    localStorage.setItem('data', JSON.stringify(copiedFolders))
    setFolders(copiedFolders)
  }

  // get code that is saved in the file with fileId
  const getCode = (fileId, folderId) => {
    const folder = folders.find((f) => f.id === folderId)
    if (!folder) return ''

    const file = folder.files.find((f) => f.id === fileId)
    return file?.code || ''
  }

  // save the new code to file with fileId
  const saveCode = (folderId, fileId, newCode) => {
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
  }

  return (
    <PlaygroundContext.Provider value={playgroundFeatures}>
      {children}
    </PlaygroundContext.Provider>
  )
}
