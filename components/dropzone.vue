<template>
  <div>
    <div v-bind="getRootProps()" class="text-center p-4 rounded-lg mt-4 border" :class="[isDragActive ? 'bg-green-100 border-2 border-green-400' : 'bg-gray-100']">
      <input v-bind="getInputProps()" />
      <img v-for="(file, idx) in acceptedFiles" :key="idx" :src="convertImage(file)" class="w-auto h-80 mx-auto shadow-lg rounded-lg">
      <div v-if="acceptedFiles.length < 1">
          <p v-if="isDragActive" class="text-gray-600">Drop file here ...</p>
          <p v-else class="text-gray-600">Choose or drop file here ..</p>
      </div>
          <button class="bg-gray-100 px-8 py-2 rounded-lg border my-4 mx-auto block" @click="open">
             {{(acceptedFiles.length > 0 ? 'Replace' : 'Choose')}}
        </button>
          <p  v-for="(error, idx) in errMsgs" :key="idx" class="p-1">
            <span class="text-red-600 bg-red-100 px-2 rounded-lg text-sm py-1">
                {{ error.reason }}
            </span>
        </p>
    </div>
  </div>
</template>

<script>
import { useDropzone } from "vue3-dropzone";
import { reactive } from 'vue'

export default {
  name: "UseDropzoneDemo",
  setup() {
        const { $event, $listen } = useNuxtApp()
        const errMsgs = reactive([])
        const onDrop = (acceptFiles, rejectReasons) => {
        errMsgs.length = 0
        if (rejectReasons.length > 0) {
          const reasons = rejectReasons[0]?.errors || []
          const errorsAr = {
            'file-invalid-type': 'The file type is not supported',
            'file-too-large': 'Image size should not exceed 20MB',
            'file-too-small': 'File size should not be less than 50Kb',
            'too-many-files': 'Please choose only one file'
          }
          reasons.forEach(err => {
            errMsgs.push({
              reason: errorsAr[err.code]
            })
          })

        }
        $event('imageReady', acceptFiles)
        }
    const convertImage = (img) => URL.createObjectURL(img)
    let dropzoneOptions = {
        maxSize: 20 * 1024 * 1024,
        minSize: 50 * 1024,
        accept:'application/pdf',
        maxFiles: 1,
        noClick: true,
        onDrop
    }
        //isDragAccept, acceptedFiles,
    const { getRootProps, getInputProps, ...rest } =  useDropzone(dropzoneOptions);
    $listen('dropzone:flush', () => {
      //console.log('flushing')
      let { acceptedFiles } = rest
      acceptedFiles.value = []
    })
        return {
        errMsgs,
        convertImage,
        getRootProps,
        getInputProps,
        ...rest,
    };
  },
};
</script>

