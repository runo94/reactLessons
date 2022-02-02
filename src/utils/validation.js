export const validation = (fieldName, fieldValue) => {

    const rules = {
        name: {
            rule: /^([a-zа-яё]+[\s]{0,1}[a-zа-яё]+[\s]{0,1}[a-zа-яё]+)$/ig,
            errorMsg: 'Не корректное имя.',
        },
        userName: {
            rule: /^([a-zа-яё]+[\s]{0,1}[a-zа-яё]+[\s]{0,1}[a-zа-яё]+)$/ig,
            errorMsg: 'Не корректное имя пользователя.',
        },
        phone: {
            rule: /^\+[0-9]{3}\s\((\d+)\)-\d{3}-\d{2}-\d{2}/g,
            errorMsg: 'Не корректное имя пользователя.',
        },
        email: {
            rule: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,
            errorMsg: 'Не корректный email'
        }
    }

    if (!rules[fieldName].rule.test(fieldValue)) {
        return rules[fieldName].errorMsg
    }

    return null

}