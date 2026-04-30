// 使用dicebear随机生成头像
type Props = {
    seed: string | number
    size?: number
}

export const Avatar = ({seed, size = 40}: Props) => {
    const url = `https://api.dicebear.com/9.x/adventurer/svg?seed=${seed}&size=${size}`
    return (
        <img
            src={url}
            alt="avatar"
            width={size}
            height={size}
            style={{borderRadius: "50%"}}
        />
    );
};