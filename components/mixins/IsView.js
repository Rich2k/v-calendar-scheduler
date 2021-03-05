import moment from 'moment';

export default {
    props: {
        activeDate: {
            type: Object
        },
        minDate: {
            type: [Date, Object]
        },
        maxDate: {
            type: [Date, Object]
        },
        events: {
            type: Array
        },
        use12: {
            type: Boolean,
            required: true
        },
        disabledDays: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        isDayDisabled(day) {
            for (let i = 0; i<this.disabledDays.length; i++) {
                let disabledDay = this.disabledDays[i];

                if (disabledDay === day.format('d')) {
                    return true;
                }
            }

            if ( !this.minDate && !this.maxDate )
                return false;

            if ( this.minDate && this.minDate.isAfter(day, 'day') ) return true;
            if ( this.maxDate && this.maxDate.isBefore(day, 'day') ) return true;
        }
    },
    watch: {
        activeDate() {
            this.buildCalendar();
        },
        events() {
            this.buildCalendar();
        }
    }
}
