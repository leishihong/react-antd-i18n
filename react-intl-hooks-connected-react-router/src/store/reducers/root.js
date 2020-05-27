import {
  SET_COLLAPSED,
  SET_LANGUAGE,
  SET_AUTH_MODAL,
  SET_CONNECT_STORE_LIST,
} from '../ActionTypes';
import { map, uniq, uniqWith, isEqual, uniqBy } from 'lodash';
const initialState = {
  language: 'id',
  isCollapsed: false,
  isAuthModal: true,
  ConnectStoreList: [],
  ChannelList: [],
  formatChannelList: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LANGUAGE: {
      window.localStorage.setItem('language', action.payload.language);
      return {
        ...state,
        language: action.payload.language,
      };
    }
    case SET_COLLAPSED: {
      return {
        ...state,
        isCollapsed: action.isCollapsed,
      };
    }
    case SET_AUTH_MODAL: {
      return {
        ...state,
        isAuthModal: action.payload,
      };
    }
    case SET_CONNECT_STORE_LIST: {
      let formatChannelList = {};
      let listFilter = action.payload.filter(
        (item) => !['EXPIRED', 'DISCONNECTED'].includes(item.connectStatus)
      );
      listFilter.sort((a, b) => {
        const sortMap = [
          'Shopee',
          'Bukalapak',
          'Tokopedia',
          'JD.ID',
          'Shopify',
          'Lazada',
        ];
        return sortMap.indexOf(a.channelName) - sortMap.indexOf(b.channelName);
      });
      console.log(listFilter, 'listFilter');
      const channelList = uniq(map(listFilter, 'channelName'));
      window.sessionStorage.setItem('channelList', JSON.stringify(channelList));
      console.log(channelList, 'channelList');
      channelList.map((item) => {
        formatChannelList[item] = [];
      });

      listFilter.map((item) => {
        formatChannelList[item.channelName].push(item);
      });
      console.log(formatChannelList, 'formatChannelList');

      return {
        ...state,
        ConnectStoreList: listFilter,
        formatChannelList: formatChannelList,
        ChannelList: channelList,
      };
    }
    default: {
      return state;
    }
  }
}
