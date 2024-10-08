export type NavigationProps = {
  $list?: NavigationItem[];
};

export type NavigationItem = {
  name: string;
  path: string;
};

export interface NavigationPropsWithDefaults extends NavigationProps {
  $color?: string; // 옵셔널한 색상
  $size?: number; // 숫자만 전달되는 크기
}
