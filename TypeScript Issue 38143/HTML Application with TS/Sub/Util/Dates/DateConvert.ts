namespace TheUtil.Dates {
    export class DateConvert {
        public Convert(p: Date): Date {
            return new Date(p.getUTCDate());
        }
        public ConvertString(p: Date): String{
            return StringUtils.FormatString("ddd");
        }
    }
}