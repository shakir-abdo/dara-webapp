<template>
  <div class="pb-16 pattern">
    <div class="container relative mx-auto  px-4 min-h-screen  flex flex-col overflow-hidden">
      <div class="flex justify-between items-center chat-header rounded-xl my-3 p-4 w-full lg:w-3/4 xl:w-1/2 mx-auto">
        <div class="flex-1">
          <nuxt-link to="/" title="back" class="back-btn w-8 h-8 md:w-12 md:h-12 rounded-lg flex justify-center items-center">
            <i class="icon icon-arrow-ios-back icon-32"></i>
          </nuxt-link>
        </div>
        <div class="text-center flex-1">
          <img class="block w-16 md:w-24 rounded-full mx-auto" :src="daraAvatar" draggable="false" />
        </div>
        <div class="flex-1"><</div>
      </div>
      <div  class="bg-white border border-[#5e2c57] rounded-lg p-2 relative flex-1 flex flex-col mb-2 w-full lg:w-3/4 xl:w-1/2 mx-auto">
        <div class="flex-1">
          <ul class="flex flex-col flex-1 overflow-y-auto hide-sb main-chat" ref="chatBody">
            <li class="flex flex-col max-w-md my-2" :class="[message.role === 'user' ? 'self-end items-end' : 'self-start items-start']" v-for="message in messages" :key="message.id">
              <img class="w-12 rounded-full" :src="message.role === 'ai' ? daraAvatar : '/avatar.png'" />
              <div class="rounded-lg p-2 mt-1 text-white" :class="[message.role === 'ai' ? 'bg-[#1a1a2e]' : 'bg-[#5e2c57]']">
                <p>{{ message.text }}</p>
              </div>
            </li>
            <li v-if="typing" class="flex flex-col max-w-md self-start items-start">
              <img class="w-12 rounded-full" :src="daraAvatar" />
              <div class="bg-[#1a1a2e] rounded-lg p-2 mt-1 text-white">
                <p>typing ...</p>
              </div>
            </li>
          </ul>
        </div>
        <form @submit.prevent="sendMessage" class="container">
          <div class="container p-4">
            <div class="flex bg-white">
              <textarea v-model="message" class="flex-1 p-3 border rounded-lg text-black" rows="2" placeholder="your message"></textarea>
              <button :disabled="typing || !message" :class="[typing ? 'cursor-not-allowed opacity-40' : '']" type="submit" title="send" class="flex justify-center items-center bg-[#af3d50] hover:opacity-75 transition-opacity text-white px-3 rounded-lg ml-2 cursor-pointer"><i class="icon icon-lg rotate-45 icon-paper-plane"></i></button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import {nanoid} from 'nanoid'
import {reactive, ref, unref} from 'vue'
export default {
  async setup() {
    useHead({
      title: 'Dara'
    })
    definePageMeta({
      pageTransition: {name: 'fade', mode: 'out-in'}
    })

    const runtimeConfig = useRuntimeConfig()
    const toast = useToast()
    const daraAvatar = ref('/dara.png')
    const session = nanoid(7)
    let chatBody = ref(null)
    const messages = reactive([
      {
        id: nanoid(8),
        role: 'ai',
        text: 'Hi my name is Dara, How i can help you today ?'
      }
    ])
    let message = ref('')
    let typing = ref(false)
    const layoutConfig = {
      header: 0,
      footer: 1
    }
    const scrollToEndOfChat = () => {
      setTimeout(() => {
        unref(chatBody).scrollTop = unref(chatBody).scrollHeight
      }, 100)
    }
    const sendMessage = async () => {
      messages.push({
        id: nanoid(8),
        role: 'user',
        text: message.value
      })
      typing.value = true
      scrollToEndOfChat();
      const res = await $fetch(`${runtimeConfig.public.backend}/api/chat`, {
        method: 'POST',
        body: {
          question: message._value,
          session
        }
      }).catch((err) => {
        toast.show({type: 'error', time: 2, title: 'Error', message: 'The message could not be sent'})
        messages.pop()
      })
      if (res?.answer) {
        typing.value = false
        message.value = ''
        messages.push({
          id: nanoid(8),
          role: 'ai',
          text: res?.answer
        })
        scrollToEndOfChat();
      } else {
        typing.value = false
      }
    }
    return {
      messages,
      daraAvatar,
      message,
      chatBody,
      sendMessage,
      layoutConfig,
      typing
    }
  },
  created() {
    const { header, footer } = this.layoutConfig;
    this.$route.meta.header = header;
    this.$route.meta.footer = footer;
  }
}
</script>
<style scoped>
.main-chat {
  max-height: calc(100vh - 18.5rem);
}
@media screen and (max-width: 430px) {
  .main-chat {
    max-height: calc(100vh - 11.7rem);
  }
}
.hide-sb {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.hide-sb::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
.chat-header {
  background-color: #1a1a2e;
}
.back-btn {
  background-color: #af3d50;
  color: #fff;
}
</style>
